---
title: Von Rust nach WebAssembly kompilieren
slug: WebAssembly/Guides/Rust_to_Wasm
l10n:
  sourceCommit: 9e69ea9db9ec62df101e83cbc07d447e1984c57e
---

Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt nach WebAssembly kompilieren und es in einer bestehenden Web-App verwenden.

## Anwendungsfälle für Rust und WebAssembly

Es gibt zwei Hauptanwendungsfälle für Rust und WebAssembly:

- Eine vollständige Anwendung erstellen — eine komplette Web-App auf Rust-Basis.
- Einen Teil einer Anwendung erstellen — Rust in einem bestehenden JavaScript-Frontend verwenden.

Derzeit konzentriert sich das Rust-Team auf den letzteren Fall, daher behandeln wir ihn hier. Für den ersteren Fall sehen Sie sich Projekte wie [`yew`](https://github.com/yewstack/yew) und [leptos](https://github.com/leptos-rs/leptos) an.

In diesem Tutorial erstellen wir mit `wasm-pack` ein Paket, einem Tool zum Erstellen von JavaScript-Paketen in Rust. Dieses Paket enthält nur WebAssembly- und JavaScript-Code, sodass Benutzer Rust nicht installiert haben müssen. Möglicherweise bemerken sie nicht einmal, dass es in Rust geschrieben ist.

## Rust-Umgebung einrichten

Wir beginnen mit der Einrichtung der erforderlichen Umgebung.

### Rust installieren

Installieren Sie Rust, indem Sie die Seite [Install Rust](https://rust-lang.org/tools/install/) aufrufen und den Anweisungen folgen. Dadurch wird ein Tool namens „rustup“ installiert, mit dem Sie mehrere Versionen von Rust verwalten können. Standardmäßig wird die neueste stabile Rust-Version installiert, die Sie für die allgemeine Rust-Entwicklung verwenden können. Rustup installiert `rustc`, den Rust-Compiler, `cargo`, den Paketmanager von Rust, `rust-std`, die Standardbibliotheken von Rust, sowie einige hilfreiche Dokumentationen — `rust-docs`.

> [!NOTE]
> Beachten Sie den Hinweis nach der Installation dazu, dass sich das `bin`-Verzeichnis von cargo in Ihrem System-`PATH` befinden muss. Es wird automatisch hinzugefügt, aber Sie müssen Ihr Terminal neu starten, damit die Änderung wirksam wird.

### wasm-pack

Um das Paket zu erstellen, benötigen wir ein zusätzliches Tool, `wasm-pack`. Es kompiliert den Code nach WebAssembly und erstellt die richtige Paketierung für die Verwendung im Browser. Geben Sie zum Herunterladen und Installieren den folgenden Befehl in Ihrem Terminal ein:

```bash
cargo install wasm-pack
```

## Unser WebAssembly-Paket erstellen

Genug eingerichtet; erstellen wir ein neues Paket in Rust. Navigieren Sie zu dem Ort, an dem Sie Ihre Projekte aufbewahren, und geben Sie Folgendes ein:

```bash
cargo new --lib hello-wasm
```

Dadurch wird in einem Unterverzeichnis namens `hello-wasm` eine neue Bibliothek mit allem erstellt, was Sie für den Einstieg benötigen:

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

`Cargo.toml` konfiguriert unseren Build. Es funktioniert ähnlich wie `Gemfile` von Bundler oder `package.json` von npm.

Cargo hat außerdem etwas Rust-Code für uns in `src/lib.rs` generiert:

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

Wir werden den oben gezeigten generierten Code aus `src/lib.rs` nicht verwenden; ersetzen Sie ihn durch Folgendes:

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

Unser Rust-Code besteht aus drei Hauptteilen. Hier geben wir eine allgemeine Erklärung und überspringen einige Details; um mehr über Rust zu erfahren, lesen Sie bitte das kostenlose Onlinebuch [The Rust Programming Language](https://doc.rust-lang.org/book/).

#### `wasm-bindgen` zur Kommunikation zwischen Rust und JavaScript verwenden

Der erste Teil sieht folgendermaßen aus:

```rust
use wasm_bindgen::prelude::*;
```

Bibliotheken werden in Rust „crates“ genannt.

Verstanden? _Cargo_ liefert _crates_.

Die erste Zeile enthält einen `use`-Befehl, der Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles aus dem Modul `wasm_bindgen::prelude`. Diese Funktionen verwenden wir im nächsten Abschnitt.

Bevor wir zum nächsten Abschnitt übergehen, sollten wir noch mehr über `wasm-bindgen` sprechen.

`wasm-pack` verwendet `wasm-bindgen` als Brücke zwischen JavaScript- und Rust-Typen. Es ermöglicht JavaScript, eine Rust-API mit einem String aufzurufen, oder einer Rust-Funktion, eine JavaScript-Ausnahme abzufangen.

Wir verwenden die Funktionalität von `wasm-bindgen` in unserem Paket. Tatsächlich geht es im nächsten Abschnitt darum.

#### Externe JavaScript-Funktionen aus Rust aufrufen

Der nächste Teil sieht folgendermaßen aus:

```rust
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}
```

Der Teil innerhalb von `#[ ]` wird „Attribut“ genannt und verändert die folgende Anweisung auf bestimmte Weise. In diesem Fall ist diese Anweisung ein `extern`, das Rust mitteilt, dass wir einige extern definierte Funktionen aufrufen möchten. Das Attribut besagt: „wasm-bindgen weiß, wie diese Funktionen gefunden werden“.

Die dritte Zeile ist eine in Rust geschriebene Funktionssignatur. Sie besagt: „Die Funktion `alert` akzeptiert ein Argument, einen String namens `s`.“ Wie Sie vielleicht vermuten, handelt es sich um [die von JavaScript bereitgestellte Funktion `alert`](/de/docs/Web/API/Window/alert). Wir rufen diese Funktion im nächsten Abschnitt auf.

Wann immer Sie JavaScript-Funktionen aufrufen möchten, können Sie sie dieser Datei hinzufügen, und `wasm-bindgen` richtet alles für Sie ein. Noch wird nicht alles unterstützt, aber wir arbeiten daran. Bitte [melden Sie Fehler](https://github.com/rustwasm/wasm-bindgen/issues/new), falls etwas fehlt.

#### Rust-Funktionen bereitstellen, die JavaScript aufrufen kann

Der letzte Teil ist dieser:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Wieder sehen wir das Attribut `#[wasm_bindgen]`. In diesem Fall verändert es keinen `extern`-Block, sondern ein `fn`; das bedeutet, dass diese Rust-Funktion von JavaScript aufgerufen werden können soll. Es ist das Gegenteil von `extern`: Dies sind nicht die Funktionen, die wir benötigen, sondern die Funktionen, die wir der Welt zur Verfügung stellen.

Diese Funktion heißt `greet` und akzeptiert ein Argument, einen String (geschrieben als `&str`) namens `name`. Anschließend ruft sie die Funktion `alert` auf, die wir oben im `extern`-Block angefordert haben. Sie übergibt einen Aufruf des Makros `format!`, mit dem wir Strings verketten können.

Das Makro `format!` akzeptiert in diesem Fall zwei Argumente: einen Format-String und eine Variable, die darin eingefügt wird. Der Format-String ist der Teil `"Hello, {}!"`. Er enthält `{}`, an denen Variablen interpoliert werden. Die Variable, die wir übergeben, ist `name`, das Argument der Funktion. Wenn wir also `greet("Steve")` aufrufen, sollten wir `"Hello, Steve!"` sehen.

Dies wird an `alert()` übergeben. Wenn wir diese Funktion aufrufen, sehen wir daher ein Warnfenster mit „Hello, Steve!“.

Nachdem unsere Bibliothek geschrieben ist, erstellen wir sie nun.

### Unseren Code nach WebAssembly kompilieren

Um unseren Code korrekt zu kompilieren, konfigurieren wir ihn zunächst mit `Cargo.toml`. Öffnen Sie diese Datei und ändern Sie ihren Inhalt wie folgt:

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

Geben Sie für das Feld `authors` Ihr eigenes Repository und dieselben Informationen an, die auch `git` verwendet.

Der wichtigste hinzuzufügende Teil ist `[package]`. Der Teil `[lib]` weist Rust an, eine `cdylib`-Version unseres Pakets zu erstellen; was das bedeutet, behandeln wir in diesem Tutorial nicht. Weitere Informationen finden Sie in der Dokumentation zu [Cargo](https://doc.rust-lang.org/cargo/guide/) und [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html).

Der letzte Abschnitt ist der Abschnitt `[dependencies]`. Hier teilen wir Cargo mit, von welcher Version von `wasm-bindgen` wir abhängig sein möchten; in diesem Fall ist das jede Version `0.2.z` (aber nicht `0.3.0` oder höher).

### Das Paket erstellen

Nachdem wir die Einrichtung abgeschlossen haben, erstellen wir das Paket.
Wir verwenden den generierten Code in einem nativen ES-Modul und Node.js.
Dafür verwenden wir das [`--target`-Argument](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) in `wasm-pack build`, um anzugeben, welche Art von WebAssembly und JavaScript generiert wird.

Führen Sie zunächst den folgenden Befehl in Ihrem Verzeichnis `hello-wasm` aus:

```bash
wasm-pack build --target web
```

Dies erledigt mehrere Dinge. Um sie im Detail kennenzulernen, lesen Sie [diesen Blogbeitrag auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). Kurz gesagt, führt `wasm-pack build` Folgendes aus:

1. Kompiliert Ihren Rust-Code nach WebAssembly.
2. Führt `wasm-bindgen` auf diesem WebAssembly aus und generiert eine JavaScript-Datei, die diese WebAssembly-Datei in ein Modul verpackt, das der Browser verstehen kann.
3. Erstellt ein Verzeichnis `pkg` und verschiebt diese JavaScript-Datei sowie Ihren WebAssembly-Code hinein.
4. Liest Ihre `Cargo.toml` und erstellt eine entsprechende `package.json`.
5. Kopiert Ihre `README.md` (falls vorhanden) in das Paket.

Das Ergebnis ist ein Paket im Verzeichnis `pkg`.

## Das Paket im Web verwenden

Jetzt, da wir ein kompiliertes Wasm-Modul haben, führen wir es im Browser aus.
Beginnen wir damit, im Stammverzeichnis des Projekts eine Datei namens `index.html` zu erstellen, sodass wir die folgende Projektstruktur erhalten:

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

Fügen Sie den folgenden Inhalt in die Datei `index.html` ein:

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

Das Skript in dieser Datei importiert den JavaScript-Glue-Code, initialisiert das Wasm-Modul und ruft die Rust-Funktion `greet` auf, die wir geschrieben haben.

Stellen Sie das Projektstammverzeichnis mit einem lokalen Webserver bereit (z. B. `python3 -m http.server`). Falls Sie nicht sicher sind, wie das geht, lesen Sie [Einen einfachen lokalen HTTP-Server ausführen](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

> [!NOTE]
> Verwenden Sie einen aktuellen Webserver, der den MIME-Typ `application/wasm` unterstützt. Ältere Webserver unterstützen ihn möglicherweise noch nicht.

Laden Sie `index.html` vom Webserver (wenn Sie das Python3-Beispiel verwendet haben: `http://localhost:8000`). Auf dem Bildschirm erscheint ein Warnfenster mit `Hello, WebAssembly!`. Wir haben erfolgreich von JavaScript nach Rust und von Rust nach JavaScript aufgerufen.

## Unser Paket für npm verfügbar machen

Wir erstellen ein npm-Paket, daher müssen Node.js und npm installiert sein.

Um Node.js und npm zu erhalten, rufen Sie die Seite [Get npm!](https://docs.npmjs.com/getting-started/) auf und folgen Sie den Anweisungen.
Dieses Tutorial richtet sich an Node.js 20. Um zwischen Node-Versionen zu wechseln, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Um das WebAssembly-Modul mit npm zu verwenden, müssen wir einige Änderungen vornehmen.
Beginnen wir damit, unser Rust mit der Option `bundler` als Ziel erneut zu kompilieren:

```bash
wasm-pack build --target bundler
```

Wir haben jetzt ein npm-Paket, das in Rust geschrieben, aber zu WebAssembly kompiliert ist. Es kann aus JavaScript verwendet werden und erfordert nicht, dass der Benutzer Rust installiert hat.

### Das npm-Paket im Web verwenden

Erstellen wir eine Website, die unser neues npm-Paket verwendet. Viele Menschen verwenden npm-Pakete über verschiedene Bundler-Tools, und in diesem Tutorial verwenden wir eines davon, `webpack`. Es ist nur geringfügig komplex und zeigt einen realistischen Anwendungsfall.

Erstellen wir im Verzeichnis `hello-wasm` ein neues Verzeichnis namens `site`, um es auszuprobieren.
Wir haben das Paket noch nicht in der npm-Registry veröffentlicht, daher können wir es mit `npm i /path/to/package` aus einer lokalen Version installieren.
Sie können [`npm link`](https://docs.npmjs.com/cli/commands/npm-link/) verwenden, aber die Installation über einen lokalen Pfad ist für diese Demo praktisch:

```bash
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die `webpack`-Entwicklungsabhängigkeiten:

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@5 copy-webpack-plugin@12
```

Konfigurieren Sie als Nächstes webpack. Erstellen Sie `webpack.config.js` und fügen Sie Folgendes ein:

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

In Ihrer `package.json` können Sie die Skripte `build` und `serve` hinzufügen, die webpack mit der gerade erstellten Konfigurationsdatei ausführen:

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

Erstellen Sie als Nächstes eine Datei namens `index.js` und geben Sie ihr folgenden Inhalt:

```js
import * as wasm from "hello-wasm";

wasm.greet("WebAssembly with npm");
```

Dadurch wird das Modul aus dem Ordner `node_modules` importiert und die Funktion `greet` aufgerufen, wobei `"WebAssembly with npm"` als String übergeben wird. Beachten Sie, dass hier nichts Besonderes geschieht, obwohl wir Rust-Code aufrufen. Soweit der JavaScript-Code erkennen kann, handelt es sich einfach um ein normales Modul.

Fügen Sie schließlich eine HTML-Datei zum Laden des JavaScript hinzu. Erstellen Sie eine Datei `index.html` und fügen Sie Folgendes hinzu:

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

Das Verzeichnis `hello-wasm/site` sollte folgendermaßen aussehen:

```plain
├── node_modules
├── index.html
├── index.js
├── package-lock.json
├── package.json
└── webpack.config.js
```

Wir sind mit dem Erstellen von Dateien fertig. Probieren wir es aus:

```bash
npm run serve
```

Dadurch wird ein Webserver gestartet und `http://localhost:8080` geöffnet. Sie sollten auf dem Bildschirm ein Warnfenster mit dem Text `Hello, WebAssembly with npm!` sehen. Wir haben das Rust-Modul erfolgreich mit npm verwendet!

Wenn Sie Ihr WebAssembly außerhalb der lokalen Entwicklung verwenden möchten, können Sie das Paket mit den Befehlen `pack` und `publish` in Ihrem Verzeichnis `hello-wasm` veröffentlichen:

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

Um auf npm zu veröffentlichen, benötigen Sie ein [npm-Konto](https://www.npmjs.com/) und müssen Ihren Rechner mit [`npm login`](https://docs.npmjs.com/cli/commands/npm-login/) autorisieren.
Wenn Sie bereit sind, können Sie mit `wasm-pack` veröffentlichen, das intern `npm publish` aufruft:

```bash
wasm-pack publish
```

## Siehe auch

- [rust-lang.org](https://rust-lang.org/)
- [wasm-bindgen](https://github.com/wasm-bindgen/wasm-bindgen)
- [wasm-pack](https://github.com/wasm-bindgen/wasm-pack)
