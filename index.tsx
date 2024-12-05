// Classe que representa um objeto do mundo real: Bicicleta
public class Bicicleta {

    // Propriedades da bicicleta
    private String marca;
    private String tipo; // Exemplo: mountain bike, estrada, urbana
    private int numeroMarchas;

    // Construtor para inicializar as propriedades da bicicleta
    public Bicicleta(String marca, String tipo, int numeroMarchas) {
        this.marca = marca;
        this.tipo = tipo;
        this.numeroMarchas = numeroMarchas;
    }

    // Método para obter a marca da bicicleta
    public String getMarca() {
        return marca;
    }

    // Método para definir a marca da bicicleta
    public void setMarca(String marca) {
        this.marca = marca;
    }

    // Método para obter o tipo da bicicleta
    public String getTipo() {
        return tipo;
    }

    // Método para definir o tipo da bicicleta
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    // Método para obter o número de marchas da bicicleta
    public int getNumeroMarchas() {
        return numeroMarchas;
    }

    // Método para definir o número de marchas da bicicleta
    public void setNumeroMarchas(int numeroMarchas) {
        this.numeroMarchas = numeroMarchas;
    }

    // Método para exibir informações sobre a bicicleta
    public void exibirInformacoes() {
        System.out.println("Marca: " + marca);
        System.out.println("Tipo: " + tipo);
        System.out.println("Número de Marchas: " + numeroMarchas);
    }

    // Método para pedalar
    public void pedalar() {
        System.out.println("Você está pedalando.");
    }

    // Método para frear
    public void frear() {
        System.out.println("Você está freando.");
    }

    // Método principal para testar a classe Bicicleta
    public static void main(String[] args) {
        // Criando um objeto Bicicleta
        Bicicleta minhaBicicleta = new Bicicleta("Caloi", "Mountain Bike", 21);

        // Exibindo informações da bicicleta
        minhaBicicleta.exibirInformacoes();

        // Pedalando a bicicleta
        minhaBicicleta.pedalar();

        // Freando a bicicleta
        minhaBicicleta.frear();
    }
}
