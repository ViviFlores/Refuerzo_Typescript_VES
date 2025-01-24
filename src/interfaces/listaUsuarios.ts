export interface ListaUsuario {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Usuario[];
    support:     Support;
}
//fn+f2 seleccionar varias lineas y cambiar nombre
//crtl+f2 seleccionar varias lineas y cambiar nombre
export interface Usuario {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}
