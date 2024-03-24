export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "RGB(255,0,0)",
        padding: "0px",
        margin: "0px",
        height: "100vh",
        minHeight: "100vh",
        border: "none",
      }}
    >
      <div style={{ textAlign: "center", display: "block" }}>
        <img
          src="https://alu-cek.com.br/web/wp-content/uploads/2016/09/logo-senai.fw_.png"
          alt="react logo"
          style={{
            width: "50%",
            margin: "auto",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        />
        <h2
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "lighter",
          }}
        >
          Em breve uma nova ferramenta para ajudar no empréstimo de itens
        </h2>
      </div>
    </div>
  );
}
