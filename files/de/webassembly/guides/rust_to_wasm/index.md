---
title: Kompilieren von Rust zu WebAssembly
slug: WebAssembly/Guides/Rust_to_Wasm
l10n:
  sourceCommit: d29b5db872881c84ecfbf3ce0c22914474a01741
---

Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt in WebAssembly kompilieren und in einer bestehenden Web-App verwenden.

## Anwendungsfälle für Rust und WebAssembly

Es gibt zwei Hauptanwendungsfälle für Rust und WebAssembly:

- Eine gesamte Anwendung erstellen — eine gesamte Web-App, die auf Rust basiert.
- Einen Teil einer Anwendung erstellen — Rust in einem bestehenden JavaScript-Frontend verwenden.

Derzeit konzentriert sich das Rust-Team auf den letzteren Fall, und das behandeln wir hier. Für den ersten Fall schauen Sie sich Projekte wie [`yew`](https://github.com/yewstack/yew) und [leptos](https://github.com/leptos-rs/leptos) an.

In diesem Tutorial erstellen wir ein Paket mit `wasm-pack`, einem Tool zum Erstellen von JavaScript-Paketen in Rust. Dieses Paket wird nur WebAssembly- und JavaScript-Code enthalten, sodass Benutzer kein Rust installiert haben müssen. Sie werden möglicherweise nicht einmal bemerken, dass es in Rust geschrieben ist.

## Einrichtung der Rust-Umgebung

Wir beginnen mit der Einrichtung der notwendigen Umgebung.

### Rust installieren

Installieren Sie Rust, indem Sie die Seite [Install Rust](https://rust-lang.org/tools/install/) besuchen und den Anweisungen folgen. Dies installiert ein Tool namens "rustup", mit dem Sie mehrere Versionen von Rust verwalten können. Standardmäßig wird die neueste stabile Rust-Version installiert, die Sie für die allgemeine Rust-Entwicklung verwenden können. Rustup installiert `rustc`, den Rust-Compiler, `cargo`, Rusts Paketmanager, `rust-std`, Rusts Standardbibliotheken und einige hilfreiche Dokumentationen — `rust-docs`.

> [!NOTE]
> Achten Sie auf die Nachinstallationshinweise bezüglich des Bedarfs, das `bin`-Verzeichnis von cargo in Ihren System-`PATH` aufzunehmen. Dies wird automatisch hinzugefügt, aber Sie müssen Ihr Terminal neu starten, damit es wirksam wird.

### wasm-pack

Um das Paket zu erstellen, benötigen wir ein zusätzliches Tool, `wasm-pack`. Dieses kompiliert den Code zu WebAssembly und erstellt die richtige Verpackung für die Nutzung im Browser. Um es herunterzuladen und zu installieren, geben Sie den folgenden Befehl in Ihr Terminal ein:

```bash
cargo install wasm-pack
```

## Erstellung unseres WebAssembly-Pakets

Genug vorbereitet; lassen Sie uns ein neues Paket in Rust erstellen. Navigieren Sie zu dem Ort, an dem Sie Ihre Projekte aufbewahren, und geben Sie dies ein:

```bash
cargo new --lib hello-wasm
```

Dies erstellt eine neue Bibliothek in einem Unterverzeichnis namens `hello-wasm` mit allem, was Sie zum Starten benötigen:

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

`Cargo.toml` konfiguriert unseren Build. Es funktioniert ähnlich wie `Gemfile` von Bundler oder `package.json` von npm.

Cargo hat auch etwas Rust-Code für uns in `src/lib.rs` generiert:

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

### Schreiben wir etwas Rust

Wir werden den generierten Code in `src/lib.rs` nicht verwenden; ersetzen Sie ihn durch Folgendes:

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

Unser Rust-Code hat drei Hauptteile. Wir geben hier eine allgemeine Erklärung und überfliegen einige Details; um mehr über Rust zu lernen, schauen Sie sich das kostenlose Online-Buch [The Rust Programming Language](https://doc.rust-lang.org/book/) an.

#### Verwendung von `wasm-bindgen` zur Kommunikation zwischen Rust und JavaScript

Der erste Teil sieht so aus:

```rust
use wasm_bindgen::prelude::*;
```

Bibliotheken werden in Rust als "Crates" bezeichnet.

Verstehen Sie? _Cargo_ verschifft _Crates_.

Die erste Zeile enthält einen `use`-Befehl, der Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles im Modul `wasm_bindgen::prelude`. Wir verwenden diese Funktionen im nächsten Abschnitt.

Bevor wir zum nächsten Abschnitt übergehen, sollten wir mehr über `wasm-bindgen` sprechen.

`wasm-pack` verwendet `wasm-bindgen`, um zwischen JavaScript- und Rust-Typen zu vermitteln. Es ermöglicht JavaScript, eine Rust-API mit einem String aufzurufen, oder einer Rust-Funktion, eine JavaScript-Ausnahme abzufangen.

Wir nutzen die Funktionalität von `wasm-bindgen` in unserem Paket. Tatsächlich ist das der nächste Abschnitt.

#### Aufrufe externer Funktionen in JavaScript aus Rust

Der nächste Teil sieht so aus:

```rust
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}
```

Der Teil innerhalb der `#[ ]` wird als "Attribut" bezeichnet und verändert die folgende Anweisung irgendwie. In diesem Fall handelt es sich bei der Anweisung um ein `extern`, das Rust mitteilt, dass wir einige extern definierte Funktionen aufrufen möchten. Das Attribut sagt "wasm-bindgen weiß, wie man diese Funktionen findet".

Die dritte Zeile ist eine Funktionssignatur, geschrieben in Rust. Sie besagt, dass die Funktion `alert` ein Argument, einen String namens `s`, erwartet. Wie Sie möglicherweise vermuten, handelt es sich dabei um [die `alert`-Funktion, die von JavaScript bereitgestellt wird](/de/docs/Web/API/Window/alert). Wir rufen diese Funktion im nächsten Abschnitt auf.

Wann immer Sie JavaScript-Funktionen aufrufen möchten, können Sie sie zu dieser Datei hinzufügen, und `wasm-bindgen` richtet alles für Sie ein. Noch nicht alles wird unterstützt, aber wir arbeiten daran. Bitte [melden Sie Fehler](https://github.com/rustwasm/wasm-bindgen/issues/new), wenn etwas fehlt.

#### Rust-Funktionen bereitstellen, die von JavaScript aufgerufen werden können

Der letzte Teil ist dieser hier:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Noch einmal sehen wir das `#[wasm_bindgen]`-Attribut. In diesem Fall verändert es keinen `extern`-Block, sondern eine `fn`; das bedeutet, dass wir möchten, dass diese Rust-Funktion von JavaScript aufgerufen werden kann. Es ist das Gegenteil von `extern`: dies sind nicht die Funktionen, die wir benötigen, sondern vielmehr die Funktionen, die wir der Welt zur Verfügung stellen.

Diese Funktion heißt `greet` und nimmt ein Argument, einen String (geschrieben `&str`), `name`. Dann ruft sie die `alert`-Funktion auf, die wir im `extern`-Block oben angefordert haben. Sie übergibt einen Aufruf des `format!`-Makros, das uns das Verketteten von Strings ermöglicht.

Das `format!`-Makro nimmt in diesem Fall zwei Argumente: einen Formatstring und eine Variable, die darin platziert werden soll. Der Formatstring ist der `"Hello, {}!"`-Teil. Er enthält `{}`s, an denen Variablen interpoliert werden. Die Variable, die wir übergeben, ist `name`, das Argument der Funktion; wenn wir also `greet("Steve")` aufrufen, sollten wir `"Hello, Steve!"` sehen.

Dies wird an `alert()` übergeben, sodass wir ein Alert-Fenster mit "Hello, Steve!" auf dem Bildschirm sehen, wenn wir diese Funktion aufrufen.

Jetzt, da unsere Bibliothek geschrieben ist, lassen Sie uns sie bauen.

### Kompilieren unseres Codes zu WebAssembly

Um unseren Code korrekt zu kompilieren, konfigurieren wir ihn zuerst mit `Cargo.toml`. Öffnen Sie diese Datei und ändern Sie den Inhalt, um so auszusehen:

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

Fügen Sie Ihr eigenes Repository ein und verwenden Sie die gleichen Informationen, die `git` für das `authors`-Feld verwendet.

Der große Teil, der hinzugefügt werden muss, ist der `[package]`. Der `[lib]`-Teil sagt Rust, dass es eine `cdylib`-Version unseres Pakets erstellen soll; wir werden in diesem Tutorial nicht darauf eingehen, was das bedeutet. Für mehr Informationen konsultieren Sie die [Cargo](https://doc.rust-lang.org/cargo/guide/)- und [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html)-Dokumentation.

Der letzte Abschnitt ist der `[dependencies]`-Abschnitt. Hier teilen wir Cargo mit, von welcher Version von `wasm-bindgen` wir abhängen möchten; in diesem Fall ist das jede `0.2.z`-Version (aber nicht `0.3.0` oder darüber).

### Das Paket erstellen

Jetzt, da wir die Einrichtung abgeschlossen haben, lassen Sie uns das Paket erstellen.
Wir werden den erzeugten Code in einem nativen ES-Modul und Node.js verwenden.
Zu diesem Zweck werden wir das [`--target`-Argument](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) in `wasm-pack build` verwenden, um festzulegen, welche Art von WebAssembly und JavaScript generiert wird.

Führen Sie zunächst den folgenden Befehl innerhalb Ihres `hello-wasm`-Verzeichnisses aus:

```bash
wasm-pack build --target web
```

Dies führt mehrere Dinge durch. Um mehr darüber zu erfahren, lesen Sie diesen [Blogbeitrag auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). Kurz gesagt, `wasm-pack build`:

1. Kompiliert Ihren Rust-Code zu WebAssembly.
2. Führt `wasm-bindgen` auf diesem WebAssembly aus und generiert eine JavaScript-Datei, die diese WebAssembly-Datei in ein Modul verpackt, das der Browser verstehen kann.
3. Erstellt ein `pkg`-Verzeichnis und verschiebt diese JavaScript-Datei und Ihren WebAssembly-Code dorthin.
4. Liest Ihr `Cargo.toml` und erzeugt ein entsprechendes `package.json`.
5. Kopiert Ihre `README.md` (falls vorhanden) in das Paket.

Das Ergebnis ist ein Paket im `pkg`-Verzeichnis.

## Verwendung des Pakets im Web

Jetzt, da wir ein kompiliertes Wasm-Modul haben, lassen Sie es uns im Browser ausführen.
Lassen Sie uns beginnen, indem wir eine Datei namens `index.html` im Stammverzeichnis des Projekts erstellen, sodass wir folgende Projektstruktur erhalten:

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

Legen Sie den folgenden Inhalt in die `index.html`-Datei:

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

Das Skript in dieser Datei importiert den JavaScript-Glue-Code, initialisiert das Wasm-Modul und ruft die `greet`-Funktion auf, die wir in Rust geschrieben haben.

Lassen Sie das Projektverzeichnis von einem lokalen Webserver aus bedienen (z.B. `python3 -m http.server`). Wenn Sie nicht wissen, wie das geht, schauen Sie sich die [Einrichtung eines einfachen lokalen HTTP-Servers](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server) an.

> [!NOTE]
> Verwenden Sie einen aktuellen Webserver, der den MIME-Typ `application/wasm` unterstützt. Ältere Webserver unterstützen ihn möglicherweise noch nicht.

Laden Sie `index.html` vom Webserver (wenn Sie das Python3-Beispiel verwendet haben: `http://localhost:8000`). Ein Alert-Fenster erscheint auf dem Bildschirm mit dem Inhalt `Hello, WebAssembly!`. Wir haben erfolgreich von JavaScript nach Rust und von Rust nach JavaScript aufgerufen.

## Unser Paket für npm verfügbar machen

Wir erstellen ein npm-Paket, daher müssen Sie Node.js und npm installiert haben.

Um Node.js und npm zu bekommen, besuchen Sie die Seite [Get npm!](https://docs.npmjs.com/getting-started/) und folgen Sie den Anweisungen.
Dieses Tutorial zielt auf Node.js 20 ab. Um zwischen Node-Versionen zu wechseln, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Um das WebAssembly-Modul mit npm zu verwenden, müssen wir einige Änderungen vornehmen.
Lassen Sie uns damit beginnen, unser Rust mit der `bundler`-Option als Ziel neu zu kompilieren:

```bash
wasm-pack build --target bundler
```

Wir haben nun ein npm-Paket, das in Rust geschrieben, aber zu WebAssembly kompiliert ist. Es ist bereit, von JavaScript verwendet zu werden und erfordert nicht, dass der Nutzer Rust installiert hat.

### Das npm-Paket im Web verwenden

Lassen Sie uns eine Website erstellen, die unser neues npm-Paket verwendet. Viele Menschen verwenden npm-Pakete mit verschiedenen Bundler-Tools, und wir werden eines davon verwenden, `webpack`, in diesem Tutorial. Es ist nur ein bisschen komplex und zeigt einen realistischen Anwendungsfall.

Lassen Sie uns ein neues Verzeichnis im `hello-wasm`-Verzeichnis namens `site` erstellen, um es auszuprobieren.
Wir haben das Paket noch nicht im npm-Registry veröffentlicht, daher können wir es von einer lokalen Version mit `npm i /path/to/package` installieren.
Sie können [`npm link`](https://docs.npmjs.com/cli/v10/commands/npm-link/) verwenden, aber die Installation von einem lokalen Pfad ist für diese Demo praktisch:

```bash
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die `webpack`-Dev-Abhängigkeiten:

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@5 copy-webpack-plugin@12
```

Konfigurieren Sie als Nächstes webpack. Erstellen Sie `webpack.config.js` und geben Sie Folgendes darin ein:

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

In Ihrem `package.json` können Sie `build`- und `serve`-Skripte hinzufügen, die webpack mit der von uns gerade erstellten Konfigurationsdatei ausführen:

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

Erstellen Sie als Nächstes eine Datei namens `index.js` und fügen Sie ihr diesen Inhalt hinzu:

```js
import * as wasm from "hello-wasm";

wasm.greet("WebAssembly with npm");
```

Dies importiert das Modul aus dem `node_modules`-Ordner und ruft die `greet`-Funktion auf, wobei `"WebAssembly with npm"` als String übergeben wird. Beachten Sie, dass hier nichts Besonderes ist, aber wir rufen Rust-Code auf. Für den JavaScript-Code scheint es ein ganz normales Modul zu sein.

Fügen Sie schließlich eine HTML-Datei zum Laden des JavaScript hinzu. Erstellen Sie eine `index.html`-Datei und fügen Sie Folgendes hinzu:

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

Das Verzeichnis `hello-wasm/site` sollte so aussehen:

```plain
├── node_modules
├── index.html
├── index.js
├── package-lock.json
├── package.json
└── webpack.config.js
```

Wir sind fertig mit der Erstellung der Dateien. Probieren wir es aus:

```bash
npm run serve
```

Dies startet einen Webserver und öffnet `http://localhost:8080`. Sie sollten ein Alert-Fenster auf dem Bildschirm mit dem Text `Hello, WebAssembly with npm!` sehen. Wir haben erfolgreich das Rust-Modul mit npm verwendet!

Wenn Sie Ihr WebAssembly außerhalb der lokalen Entwicklung verwenden möchten, können Sie das Paket mit den Befehlen `pack` und `publish` innerhalb Ihres `hello-wasm`-Verzeichnisses veröffentlichen:

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

Um auf npm zu veröffentlichen, benötigen Sie ein [npm-Konto](https://www.npmjs.com/) und müssen Ihre Maschine mit [`npm adduser`](https://docs.npmjs.com/cli/v10/commands/npm-adduser/) autorisieren.
Wenn Sie bereit sind, können Sie mit `wasm-pack` veröffentlichen, das unter der Haube `npm publish` aufruft:

```bash
wasm-pack publish
```

## Siehe auch

- [rust-lang.org](https://rust-lang.org/)
- [wasm-bindgen](https://github.com/wasm-bindgen/wasm-bindgen)
- [wasm-pack](https://github.com/wasm-bindgen/wasm-pack)
