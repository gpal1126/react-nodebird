import React, { useState, useCallback, memo } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

//메모를 이용한 PureComponent(최적화) 적용
const TextInput = memo(({value, onChange}) => {
    return (
        <Input value={value} required onChange={onChange} />
    );
});

const Signup = () => {

    //const [id, setId] = useState('');
    //const [nickname, setNickname] = useState('');
    //const [password, setPassword] = useState('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    //커스텀 훅
    const useInput = (initValue = null) => {
        const [value, setter] = useState(initValue);
        const handler = useCallback((e) => {
            setter(e.target.value);
        }, []);
        return [value, handler];
    };

    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmit = useCallback((e) => {
        //e.preventDefault();
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        /* console.log({
            id,
            nickname,
            password,
            passwordCheck,
            term,
        }); */
    }, [password, passwordCheck, term]);
    
    /*
    props로 넘겨주는 함수는 useCallback이 필수!
    함수 내부에서 쓰는 state 값은 deps 배열에 넣자
    */

    /* const onChangeId = (e) => {
        setId(e.target.value);
    }; */

    /* const onChangeNickname = (e) => {
        setNickname(e.target.value);
    }; */

    /* const onChangePassword = (e) => {
        setPassword(e.target.value);
    }; */

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }, [password]);

    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);

    return (
        <>
            <Form onSubmit={onSubmit} style={{ padding: 10 }}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    {/* <TextInput name="user-id" value={id} onChange={onChangeId} /> */}
                    <Input name="user-id" value={id} required onChange={onChangeId} /> 
                </div>
                <div>
                    <label htmlFor="user-nickname">닉네임</label>
                    <br />
                    <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호 확인</label>
                    <br />
                    <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
                    {passwordError && <div style={{ color:'red' }}>비밀번호가 일치하지 않습니다.</div>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>회원가입을 동의합니다.</Checkbox>
                    {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </>
    );
}

export default Signup;