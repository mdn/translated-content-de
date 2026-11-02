---
title: Von Rust zu WebAssembly kompilieren
slug: WebAssembly/Guides/Rust_to_Wasm
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt zu WebAssembly kompilieren und es in einer bestehenden Web-App verwenden.

## Anwendungsfälle für Rust und WebAssembly

Es gibt zwei wesentliche Anwendungsfälle für Rust und WebAssembly:

- Eine vollständige Anwendung erstellen – eine vollständig auf Rust basierende Web-App.
- Einen Teil einer Anwendung erstellen – Rust in einem bestehenden JavaScript-Frontend verwenden.

Derzeit konzentriert sich das Rust-Team auf den zweiten Fall, den wir deshalb hier behandeln. Für den ersten Fall sehen Sie sich Projekte wie [`yew`](https://github.com/yewstack/yew) und [leptos](https://github.com/leptos-rs/leptos) an.

In diesem Tutorial erstellen wir mit `wasm-pack` ein Paket. Dieses Tool dient dazu, JavaScript-Pakete in Rust zu erstellen. Das Paket enthält nur WebAssembly- und JavaScript-Code, sodass Benutzer Rust nicht installiert haben müssen. Möglicherweise bemerken sie nicht einmal, dass es in Rust geschrieben wurde.

## Rust-Umgebung einrichten

Zunächst richten wir die erforderliche Umgebung ein.

### Rust installieren

Rufen Sie die Seite [Rust installieren](https://rust-lang.org/tools/install/) auf und folgen Sie den Anweisungen. Dadurch wird das Tool „rustup“ installiert, mit dem Sie mehrere Rust-Versionen verwalten können. Standardmäßig installiert es die neueste stabile Rust-Version, die Sie für die allgemeine Rust-Entwicklung verwenden können. Rustup installiert `rustc`, den Rust-Compiler, `cargo`, den Paketmanager von Rust, `rust-std`, die Rust-Standardbibliotheken, sowie die Dokumentation `rust-docs`.

> [!NOTE]
> Beachten Sie den Hinweis nach der Installation: Das `bin`-Verzeichnis von cargo muss sich im `PATH` Ihres Systems befinden. Es wird automatisch hinzugefügt, aber Sie müssen Ihr Terminal neu starten, damit die Änderung wirksam wird.

### wasm-pack

Zum Erstellen des Pakets benötigen wir ein weiteres Tool: `wasm-pack`. Es kompiliert den Code zu WebAssembly und erstellt die passende Paketstruktur für die Verwendung im Browser. Geben Sie zum Herunterladen und Installieren den folgenden Befehl in Ihr Terminal ein:

```bash
cargo install wasm-pack
```

## Unser WebAssembly-Paket erstellen

Genug vorbereitet: Erstellen wir ein neues Paket in Rust. Wechseln Sie in das Verzeichnis, in dem Sie Ihre Projekte ablegen, und geben Sie Folgendes ein:

```bash
cargo new --lib hello-wasm
```

Dadurch wird im Unterverzeichnis `hello-wasm` eine neue Bibliothek mit allem erstellt, was Sie für den Einstieg benötigen:

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

`Cargo.toml` konfiguriert den Build. Die Datei funktioniert ähnlich wie `Gemfile` bei Bundler oder `package.json` bei npm.

Cargo hat außerdem Rust-Code für uns in `src/lib.rs` erzeugt:

```rust
pub fn add(left: u64, right: u64) -> u64 {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
```

### Schreiben wir etwas Rust-Code

Wir verwenden den oben gezeigten, generierten Code in `src/lib.rs` nicht. Ersetzen Sie ihn durch Folgendes:

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Unser Rust-Code besteht aus drei wesentlichen Teilen. Wir geben hier einen Überblick und lassen einige Details aus. Wenn Sie mehr über Rust erfahren möchten, lesen Sie das kostenlose Online-Buch [The Rust Programming Language](https://doc.rust-lang.org/book/).

#### Mit `wasm-bindgen` zwischen Rust und JavaScript kommunizieren

Der erste Teil sieht so aus:

```rust
use wasm_bindgen::prelude::*;
```

Bibliotheken werden in Rust „Crates“ genannt.

Verstanden? _Cargo_ transportiert _Crates_.

Die erste Zeile enthält einen `use`-Befehl, der Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles aus dem Modul `wasm_bindgen::prelude`. Diese Funktionen verwenden wir im nächsten Abschnitt.

Bevor wir zum nächsten Abschnitt übergehen, sollten wir näher auf `wasm-bindgen` eingehen.

`wasm-pack` verwendet `wasm-bindgen`, um eine Verbindung zwischen JavaScript- und Rust-Typen herzustellen. Damit kann JavaScript eine Rust-API mit einem String aufrufen oder eine Rust-Funktion eine JavaScript-Exception abfangen.

Wir nutzen die Funktionalität von `wasm-bindgen` in unserem Paket. Darum geht es im nächsten Abschnitt.

#### Externe JavaScript-Funktionen aus Rust aufrufen

Der nächste Teil sieht so aus:

```rust
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}
```

Der Teil innerhalb von `#[ ]` wird „Attribut“ genannt und verändert die nachfolgende Anweisung. In diesem Fall ist diese Anweisung ein `extern`, das Rust mitteilt, dass wir extern definierte Funktionen aufrufen möchten. Das Attribut besagt: „wasm-bindgen weiß, wie diese Funktionen zu finden sind.“

Die dritte Zeile ist eine in Rust geschriebene Funktionssignatur. Sie besagt: „Die Funktion `alert` erwartet ein Argument, einen String namens `s`.“ Wie Sie vielleicht vermuten, handelt es sich dabei um [die von JavaScript bereitgestellte Funktion `alert`](/de/docs/Web/API/Window/alert). Wir rufen diese Funktion im nächsten Abschnitt auf.

Wenn Sie JavaScript-Funktionen aufrufen möchten, können Sie sie dieser Datei hinzufügen. `wasm-bindgen` richtet dann alles für Sie ein. Noch wird nicht alles unterstützt, aber wir arbeiten daran. Bitte [melden Sie Fehler](https://github.com/rustwasm/wasm-bindgen/issues/new), wenn etwas fehlt.

#### Rust-Funktionen bereitstellen, die JavaScript aufrufen kann

Der letzte Teil ist dieser:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Wieder sehen wir das Attribut `#[wasm_bindgen]`. In diesem Fall verändert es keinen `extern`-Block, sondern ein `fn`. Das bedeutet, dass diese Rust-Funktion von JavaScript aufgerufen werden können soll. Es ist das Gegenstück zu `extern`: Dies sind nicht die Funktionen, die wir benötigen, sondern die Funktionen, die wir anderen zur Verfügung stellen.

Diese Funktion heißt `greet` und erwartet ein Argument: einen String (`&str`) namens `name`. Anschließend ruft sie die Funktion `alert` auf, die wir im obigen `extern`-Block angegeben haben. Dabei übergibt sie ihr das Ergebnis eines Aufrufs des Makros `format!`, mit dem wir Strings zusammensetzen können.

Das Makro `format!` erhält in diesem Fall zwei Argumente: einen Format-String und eine Variable, die darin eingesetzt werden soll. Der Format-String ist `"Hello, {}!"`. Er enthält `{}`, an deren Stelle Variablen eingesetzt werden. Die übergebene Variable ist `name`, das Argument der Funktion. Wenn wir also `greet("Steve")` aufrufen, sollten wir `"Hello, Steve!"` sehen.

Das Ergebnis wird an `alert()` übergeben. Wenn wir diese Funktion aufrufen, erscheint daher ein Dialogfeld mit „Hello, Steve!“.

Nachdem unsere Bibliothek geschrieben ist, erstellen wir sie.

### Unseren Code zu WebAssembly kompilieren

Damit unser Code korrekt kompiliert wird, konfigurieren wir ihn zunächst mit `Cargo.toml`. Öffnen Sie diese Datei und ändern Sie ihren Inhalt wie folgt:

```toml
[package]
name = "hello-wasm"
version = "0.1.0"
authors = ["Your Name <you@example.com>"]
description = "A sample project with wasm-pack"
license = "MIT/Apache-2.0"
repository = "https://github.com/yourgithubusername/hello-wasm"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

Tragen Sie Ihr eigenes Repository ein und verwenden Sie für das Feld `authors` dieselben Angaben wie in `git`.

Der wichtigste hinzuzufügende Teil ist `[package]`. Der Abschnitt `[lib]` weist Rust an, eine `cdylib`-Version unseres Pakets zu erstellen. Was das bedeutet, behandeln wir in diesem Tutorial nicht. Weitere Informationen finden Sie in der Dokumentation zu [Cargo](https://doc.rust-lang.org/cargo/guide/) und [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html).

Der letzte Abschnitt ist `[dependencies]`. Hier teilen wir Cargo mit, von welcher Version von `wasm-bindgen` unser Paket abhängen soll: in diesem Fall von einer beliebigen `0.2.z`-Version, aber nicht von `0.3.0` oder höher.

### Das Paket erstellen

Nachdem die Einrichtung abgeschlossen ist, erstellen wir das Paket.
Wir verwenden den generierten Code in einem nativen ES-Modul und in Node.js.
Dazu geben wir mit dem [Argument `--target`](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) für `wasm-pack build` an, welche Art von WebAssembly und JavaScript generiert werden soll.

Führen Sie zunächst den folgenden Befehl in Ihrem Verzeichnis `hello-wasm` aus:

```bash
wasm-pack build --target web
```

Dabei passieren mehrere Dinge. Eine ausführliche Erklärung finden Sie in [diesem Blogbeitrag auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). Kurz gesagt führt `wasm-pack build` Folgendes aus:

1. Es kompiliert Ihren Rust-Code zu WebAssembly.
2. Es führt `wasm-bindgen` für dieses WebAssembly aus und erzeugt eine JavaScript-Datei, die die WebAssembly-Datei in ein für den Browser verständliches Modul einbindet.
3. Es erstellt ein Verzeichnis `pkg` und verschiebt die JavaScript-Datei und Ihren WebAssembly-Code dorthin.
4. Es liest Ihre `Cargo.toml` und erzeugt eine entsprechende `package.json`.
5. Es kopiert Ihre `README.md` in das Paket, sofern eine vorhanden ist.

Das Ergebnis ist ein Paket im Verzeichnis `pkg`.

## Das Paket im Web verwenden

Nachdem wir ein kompiliertes Wasm-Modul haben, führen wir es im Browser aus.
Erstellen Sie zunächst im Stammverzeichnis des Projekts eine Datei namens `index.html`. Danach sollte das Projekt folgende Struktur haben:

```plain
├── Cargo.lock
├── Cargo.toml
├── index.html  <-- new index.html file
├── pkg
│   ├── hello_wasm.d.ts
│   ├── hello_wasm.js
│   ├── hello_wasm_bg.wasm
│   ├── hello_wasm_bg.wasm.d.ts
│   └── package.json
├── src
│   └── lib.rs
└── target
    ├── CACHEDIR.TAG
    ├── release
    └── wasm32-unknown-unknown
```

Fügen Sie der Datei `index.html` den folgenden Inhalt hinzu:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>hello-wasm example</title>
  </head>
  <body>
    <script type="module">
      import init, { greet } from "./pkg/hello_wasm.js";

      init().then(() => {
        greet("WebAssembly");
      });
    </script>
  </body>
</html>
```

Das Skript in dieser Datei importiert den JavaScript-Verbindungscode, initialisiert das Wasm-Modul und ruft die Funktion `greet` auf, die wir in Rust geschrieben haben.

Stellen Sie das Stammverzeichnis des Projekts über einen lokalen Webserver bereit (z. B. mit `python3 -m http.server`). Wenn Sie nicht wissen, wie das geht, lesen Sie [Einen lokalen HTTP-Server ausführen](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_local_http_server).

> [!NOTE]
> Verwenden Sie einen aktuellen Webserver, der den MIME-Typ `application/wasm` unterstützt. Ältere Webserver unterstützen ihn möglicherweise noch nicht.

Laden Sie `index.html` über den Webserver (beim Python3-Beispiel unter `http://localhost:8000`). Auf dem Bildschirm erscheint ein Dialogfeld mit `Hello, WebAssembly!`. Wir haben erfolgreich von JavaScript aus Rust-Code und von Rust aus JavaScript-Code aufgerufen.

## Unser Paket auf npm verfügbar machen

Wir erstellen ein npm-Paket. Daher müssen Node.js und npm installiert sein.

Um Node.js und npm zu installieren, rufen Sie die Seite [Get npm!](https://docs.npmjs.com/getting-started/) auf und folgen Sie den Anweisungen.
Dieses Tutorial ist auf Node.js 20 ausgelegt. Um zwischen Node-Versionen zu wechseln, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Um das WebAssembly-Modul mit npm zu verwenden, müssen wir einige Änderungen vornehmen.
Kompilieren wir zunächst unseren Rust-Code neu und verwenden dabei die Option `bundler` als Ziel:

```bash
wasm-pack build --target bundler
```

Jetzt haben wir ein in Rust geschriebenes, aber zu WebAssembly kompiliertes npm-Paket. Es kann von JavaScript aus verwendet werden, ohne dass Benutzer Rust installiert haben müssen.

### Das npm-Paket im Web verwenden

Erstellen wir eine Website, die unser neues npm-Paket verwendet. Viele verwenden npm-Pakete über verschiedene Bundler-Tools. In diesem Tutorial nutzen wir eines davon: `webpack`. Es ist nur mäßig komplex und zeigt einen realistischen Anwendungsfall.

Erstellen Sie zum Ausprobieren im Verzeichnis `hello-wasm` ein neues Verzeichnis namens `site`.
Wir haben das Paket noch nicht in der npm-Registry veröffentlicht, können es aber mit `npm i /path/to/package` aus einer lokalen Version installieren.
Sie können auch [`npm link`](https://docs.npmjs.com/cli/commands/npm-link/) verwenden, aber für dieses Beispiel ist die Installation über einen lokalen Pfad praktisch:

```bash
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die Entwicklungsabhängigkeiten für `webpack`:

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@5 copy-webpack-plugin@12
```

Konfigurieren Sie als Nächstes webpack. Erstellen Sie `webpack.config.js` mit folgendem Inhalt:

```js
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  mode: "development",
  experiments: {
    asyncWebAssembly: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "index.html" }],
    }),
  ],
};
```

In Ihrer `package.json` können Sie die Skripte `build` und `serve` hinzufügen, die webpack mit der soeben erstellten Konfigurationsdatei ausführen:

```json
{
  "scripts": {
    "build": "webpack --config webpack.config.js",
    "serve": "webpack serve --config webpack.config.js --open"
  },
  "dependencies": {
    "hello-wasm": "file:../pkg"
  },
  "devDependencies": {
    "copy-webpack-plugin": "^12.0.2",
    "webpack": "^5.97.1",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.1.0"
  }
}
```

Erstellen Sie anschließend eine Datei namens `index.js` mit folgendem Inhalt:

```js
import * as wasm from "hello-wasm";

wasm.greet("WebAssembly with npm");
```

Dieser Code importiert das Modul aus dem Ordner `node_modules` und ruft die Funktion `greet` mit `"WebAssembly with npm"` als String auf. Beachten Sie, dass hier nichts Besonderes zu sehen ist, obwohl wir Rust-Code aufrufen. Für den JavaScript-Code sieht das wie ein gewöhnliches Modul aus.

Fügen Sie schließlich eine HTML-Datei hinzu, um das JavaScript zu laden. Erstellen Sie eine Datei namens `index.html` mit folgendem Inhalt:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>hello-wasm example</title>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```

Das Verzeichnis `hello-wasm/site` sollte nun so aussehen:

```plain
├── node_modules
├── index.html
├── index.js
├── package-lock.json
├── package.json
└── webpack.config.js
```

Alle Dateien sind erstellt. Probieren wir es aus:

```bash
npm run serve
```

Dadurch wird ein Webserver gestartet und `http://localhost:8080` geöffnet. Auf dem Bildschirm sollte ein Dialogfeld mit dem Text `Hello, WebAssembly with npm!` erscheinen. Wir haben das Rust-Modul erfolgreich mit npm verwendet!

Wenn Sie Ihr WebAssembly-Modul auch außerhalb der lokalen Entwicklung verwenden möchten, können Sie das Paket mit den Befehlen `pack` und `publish` in Ihrem Verzeichnis `hello-wasm` veröffentlichen:

```bash
wasm-pack pack
npm notice
npm notice 📦  hello-wasm@0.1.0
npm notice Tarball Contents
npm notice 2.9kB hello_wasm_bg.js
npm notice 16.7kB hello_wasm_bg.wasm
npm notice 85B hello_wasm.d.ts
npm notice 182B hello_wasm.js
npm notice 549B package.json
...
hello-wasm-0.1.0.tgz
[INFO]: 🎒  packed up your package!
```

Für die Veröffentlichung auf npm benötigen Sie ein [npm-Konto](https://www.npmjs.com/) und müssen Ihren Rechner mit [`npm login`](https://docs.npmjs.com/cli/commands/npm-login/) autorisieren.
Wenn Sie bereit sind, können Sie das Paket mit `wasm-pack` veröffentlichen. Dabei wird im Hintergrund `npm publish` aufgerufen:

```bash
wasm-pack publish
```

## Siehe auch

- [rust-lang.org](https://rust-lang.org/)
- [wasm-bindgen](https://github.com/wasm-bindgen/wasm-bindgen)
- [wasm-pack](https://github.com/wasm-bindgen/wasm-pack)
