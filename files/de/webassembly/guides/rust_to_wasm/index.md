---
title: Kompilierung von Rust zu WebAssembly
slug: WebAssembly/Guides/Rust_to_Wasm
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

Wenn Sie Rust-Code haben, können Sie ihn in [WebAssembly](/de/docs/WebAssembly) (Wasm) kompilieren. Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt in WebAssembly kompilieren und in einer vorhandenen Webanwendung verwenden können.

## Anwendungsfälle für Rust und WebAssembly

Es gibt zwei Hauptanwendungsfälle für Rust und WebAssembly:

- Eine vollständige Anwendung erstellen – eine gesamte Webanwendung, die auf Rust basiert.
- Einen Teil einer Anwendung erstellen – Rust in einem vorhandenen JavaScript-Frontend verwenden.

Derzeit konzentriert sich das Rust-Team auf den letzteren Fall, und genau das behandeln wir hier. Für den ersten Fall schauen Sie sich Projekte wie [`yew`](https://github.com/yewstack/yew) und [leptos](https://github.com/leptos-rs/leptos) an.

In diesem Tutorial erstellen wir ein Paket mit `wasm-pack`, einem Tool zur Erstellung von JavaScript-Paketen in Rust. Dieses Paket wird nur WebAssembly- und JavaScript-Code enthalten, sodass Benutzer Rust nicht installiert haben müssen. Möglicherweise bemerken sie nicht einmal, dass es in Rust geschrieben ist.

## Rust-Umgebung einrichten

Wir beginnen mit der Einrichtung der notwendigen Umgebung.

### Installieren von Rust

Installieren Sie Rust, indem Sie die Seite [Rust installieren](https://www.rust-lang.org/tools/install) besuchen und den Anweisungen folgen. Dadurch wird ein Tool namens "rustup" installiert, mit dem Sie mehrere Rust-Versionen verwalten können. Standardmäßig wird die neueste stabile Rust-Version installiert, die Sie für die allgemeine Rust-Entwicklung verwenden können. Rustup installiert `rustc`, den Rust-Compiler, `cargo`, Rusts Paketmanager, `rust-std`, Rusts Standardbibliotheken und einige hilfreiche Dokumentationen — `rust-docs`.

> [!NOTE]
> Achten Sie auf die Notiz nach der Installation, dass das `bin`-Verzeichnis von cargo in Ihrem System-`PATH` sein muss. Dies wird automatisch hinzugefügt, aber Sie müssen Ihr Terminal neu starten, damit es wirksam wird.

### wasm-pack

Um das Paket zu erstellen, benötigen wir ein zusätzliches Tool, `wasm-pack`. Damit wird der Code zu WebAssembly kompiliert und das richtige Paket für die Nutzung im Browser erstellt. Um es herunterzuladen und zu installieren, geben Sie den folgenden Befehl in Ihr Terminal ein:

```bash
cargo install wasm-pack
```

## Erstellung unseres WebAssembly-Pakets

Genug vorbereitet; lassen Sie uns ein neues Paket in Rust erstellen. Navigieren Sie zu dem Ort, an dem Sie Ihre Projekte aufbewahren, und geben Sie Folgendes ein:

```bash
cargo new --lib hello-wasm
```

Dies erstellt eine neue Bibliothek in einem Unterverzeichnis namens `hello-wasm` mit allem, was Sie benötigen, um loszulegen:

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

`Cargo.toml` ist die Datei, die unseren Build konfiguriert. Sie funktioniert ähnlich wie `Gemfile` von Bundler oder `package.json` von npm.

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

Wir werden den generierten `src/lib.rs`-Code nicht verwenden; ersetzen Sie ihn durch Folgendes:

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

Unser Rust-Code hat drei Hauptbestandteile; lassen Sie uns jeden der Reihe nach besprechen. Wir geben hier eine allgemeine Erklärung und übergehen einige Details; um mehr über Rust zu lernen, schauen Sie in das kostenlose Online-Buch [The Rust Programming Language](https://doc.rust-lang.org/book/).

#### Verwendung von `wasm-bindgen` zur Kommunikation zwischen Rust und JavaScript

Der erste Teil sieht so aus:

```rust
use wasm_bindgen::prelude::*;
```

Bibliotheken werden in Rust "Crates" genannt.

Verstanden? _Cargo_ verschifft _Crates_.

Die erste Zeile enthält einen `use`-Befehl, der Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles im Modul `wasm_bindgen::prelude`. Wir verwenden diese Features im nächsten Abschnitt.

Bevor wir zum nächsten Abschnitt übergehen, sollten wir mehr über `wasm-bindgen` sprechen.

`wasm-pack` verwendet `wasm-bindgen`, ein weiteres Tool, um eine Brücke zwischen den Typen von JavaScript und Rust zu schaffen. Es ermöglicht JavaScript, eine Rust-API mit einem String aufzurufen, oder einer Rust-Funktion, eine JavaScript-Ausnahme abzufangen.

Wir verwenden die Funktionalität von `wasm-bindgen` in unserem Paket. Tatsächlich folgt jetzt der nächste Abschnitt.

#### Aufrufen externer Funktionen in JavaScript von Rust

Der nächste Teil sieht so aus:

```rust
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}
```

Der Teil innerhalb der `#[ ]` wird als "Attribut" bezeichnet und modifiziert die nächste Anweisung irgendwie. In diesem Fall ist diese Anweisung ein `extern`, das Rust mitteilt, dass wir einige extern definierte Funktionen aufrufen möchten. Das Attribut sagt "wasm-bindgen weiß, wie man diese Funktionen findet".

Die dritte Zeile ist eine Funktionssignatur, geschrieben in Rust. Sie sagt "die Funktion `alert` nimmt ein Argument, einen String namens `s`."

Wie Sie vielleicht vermuten, handelt es sich hierbei um [die `alert`-Funktion, die von JavaScript bereitgestellt wird](/de/docs/Web/API/Window/alert). Wir rufen diese Funktion im nächsten Abschnitt auf.

Wann immer Sie JavaScript-Funktionen aufrufen möchten, können Sie sie zu dieser Datei hinzufügen, und `wasm-bindgen` richtet alles für Sie ein. Noch nicht alles wird unterstützt, aber wir arbeiten daran. Bitte [melden Sie Fehler](https://github.com/rustwasm/wasm-bindgen/issues/new), wenn etwas fehlt.

#### Erzeugung von Rust-Funktionen, die von JavaScript aufgerufen werden können

Der letzte Teil ist dieser hier:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Wieder einmal sehen wir das `#[wasm_bindgen]`-Attribut. In diesem Fall modifiziert es keinen `extern`-Block, sondern eine `fn`; das bedeutet, dass wir möchten, dass diese Rust-Funktion von JavaScript aufgerufen werden kann. Es ist das Gegenteil von `extern`: dies sind nicht die Funktionen, die wir benötigen, sondern die Funktionen, die wir der Welt geben.

Diese Funktion heißt `greet` und nimmt ein Argument, einen String (geschrieben als `&str`), `name`. Sie ruft dann die `alert`-Funktion auf, die wir im `extern`-Block oben angefragt haben. Sie übergibt einen Aufruf an das `format!`-Makro, das es uns ermöglicht, Strings zu verketten.

Das `format!`-Makro nimmt in diesem Fall zwei Argumente: einen Format-String und eine Variable, die darin eingesetzt wird. Der Format-String ist das `"Hello, {}!"`-Stück. Es enthält `{}`s, wo Variablen interpoliert werden. Die Variable, die wir übergeben, ist `name`, das Argument der Funktion, sodass wenn wir `greet("Steve")` aufrufen, wir `"Hello, Steve!"` sehen sollten.

Das wird an `alert()` übergeben, sodass wenn wir diese Funktion aufrufen, ein Meldungsfeld mit "Hello, Steve!" angezeigt wird.

Jetzt, da unsere Bibliothek geschrieben ist, lassen Sie uns sie kompilieren.

### Kompilierung unseres Codes zu WebAssembly

Um unseren Code korrekt zu kompilieren, konfigurieren wir ihn zunächst mit `Cargo.toml`. Öffnen Sie diese Datei und ändern Sie deren Inhalt so, dass er wie folgt aussieht:

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

Füllen Sie Ihr eigenes Repository ein und verwenden Sie dieselben Informationen, die `git` für das Feld `authors` verwendet.

Der große Teil zum Hinzufügen ist das `[package]`. Der `[lib]`-Teil weist Rust an, eine `cdylib`-Version unseres Pakets zu erstellen; wir werden in diesem Tutorial nicht näher darauf eingehen, was das bedeutet. Für weitere Informationen konsultieren Sie die [Cargo](https://doc.rust-lang.org/cargo/guide/)- und [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html)-Dokumentationen.

Der letzte Abschnitt ist der `[dependencies]`-Abschnitt. Hier teilen wir Cargo mit, welche Version von `wasm-bindgen` wir benötigen; in diesem Fall ist das jede Version `0.2.z` (aber nicht `0.3.0` oder darüber).

### Erstellung des Pakets

Jetzt, da wir die Einrichtung abgeschlossen haben, erstellen wir das Paket.
Wir werden den generierten Code in einem nativen ES-Modul und in Node.js verwenden.
Zu diesem Zweck verwenden wir das [`--target`-Argument](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) in `wasm-pack build`, um anzugeben, welche Art von WebAssembly und JavaScript generiert wird.

Führen Sie zunächst den folgenden Befehl in Ihrem `hello-wasm`-Verzeichnis aus:

```bash
wasm-pack build --target web
```

Dies tut mehrere Dinge. Um mehr darüber zu erfahren, lesen Sie [diesen Blogpost auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). Kurz gesagt, `wasm-pack build`:

1. Kompiliert Ihren Rust-Code zu WebAssembly.
2. Führt `wasm-bindgen` auf diesem WebAssembly aus und generiert eine JavaScript-Datei, die diese WebAssembly-Datei in ein Modul verpackt, das der Browser verstehen kann.
3. Erstellt ein `pkg`-Verzeichnis und verschiebt diese JavaScript-Datei und Ihren WebAssembly-Code hinein.
4. Liest Ihre `Cargo.toml` und erstellt ein entsprechendes `package.json`.
5. Kopiert Ihr `README.md` (falls Sie eines haben) in das Paket.

Das Endergebnis? Sie haben ein Paket innerhalb des `pkg`-Verzeichnisses.

## Verwendung des Pakets im Web

Jetzt, da wir ein kompiliertes Wasm-Modul haben, lassen Sie es uns im Browser ausführen.
Beginnen wir mit der Erstellung einer Datei namens `index.html` im Stammverzeichnis des Projekts, sodass wir die folgende Projektstruktur haben:

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

Das Skript in dieser Datei importiert den JavaScript-Klebstoff, initialisiert das Wasm-Modul und ruft die `greet`-Funktion auf, die wir in Rust geschrieben haben.

Bedienen Sie das Projektverzeichnis mit einem lokalen Webserver (z.B. `python3 -m http.server`). Wenn Sie nicht sicher sind, wie das geht, lesen Sie [Ausführung eines einfachen lokalen HTTP-Servers](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

> [!NOTE]
> Verwenden Sie einen aktuellen Webserver, der den MIME-Typ `application/wasm` unterstützt. Ältere Webserver unterstützen diesen möglicherweise noch nicht.

Laden Sie `index.html` vom Webserver (wenn Sie das Python3-Beispiel verwendet haben: `http://localhost:8000`). Ein Meldungsfeld erscheint auf dem Bildschirm mit dem Inhalt `Hello, WebAssembly!`. Wir haben erfolgreich von JavaScript in Rust und von Rust in JavaScript aufgerufen.

## Machen unseres Pakets verfügbar für npm

Wir erstellen ein npm-Paket, daher müssen Sie Node.js und npm installiert haben.

Um Node.js und npm zu erhalten, gehen Sie zur Seite [Get npm!](https://docs.npmjs.com/getting-started/) und folgen den Anweisungen.
Dieses Tutorial zielt auf Node 20 ab. Um zwischen Node-Versionen zu wechseln, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Um das WebAssembly-Modul mit npm zu verwenden, müssen wir einige Änderungen vornehmen.
Beginnen wir damit, unser Rust mit der `bundler`-Option als Ziel neu zu kompilieren:

```bash
wasm-pack build --target bundler
```

Wir haben jetzt ein npm-Paket, das in Rust geschrieben, aber zu WebAssembly kompiliert wurde. Es ist bereit zur Verwendung aus JavaScript und erfordert nicht, dass der Benutzer Rust installiert hat; der enthaltene Code war der WebAssembly-Code, nicht der Rust-Quellcode.

### Verwendung des npm-Pakets im Web

Lassen Sie uns eine Website erstellen, die unser neues npm-Paket verwendet. Viele Leute nutzen npm-Pakete über verschiedene Bundler-Tools, und wir werden eines davon, `webpack`, in diesem Tutorial verwenden. Es ist nur etwas komplex und zeigt einen realistischen Anwendungsfall.

Erstellen Sie ein neues Verzeichnis im `hello-wasm`-Verzeichnis namens `site`, um es auszuprobieren.
Wir haben das Paket noch nicht im npm-Registry veröffentlicht, daher können wir es von einer lokalen Version aus installieren, indem wir `npm i /path/to/package` verwenden.
Sie können [`npm link`](https://docs.npmjs.com/cli/v10/commands/npm-link/) verwenden, aber das Installieren von einem lokalen Pfad ist praktisch für diese Demo:

```bash
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die `webpack`-Entwicklungsabhängigkeiten:

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@5 copy-webpack-plugin@12
```

Als nächstes müssen wir `webpack` konfigurieren. Erstellen Sie `webpack.config.js` und fügen Sie Folgendes hinzu:

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

In Ihrem `package.json` können Sie `build`- und `serve`-Skripte hinzufügen, die `webpack` mit der gerade erstellten Konfigurationsdatei ausführen:

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

Erstellen Sie als nächstes eine Datei namens `index.js` und geben Sie diesen Inhalt ein:

```js
import * as wasm from "hello-wasm";

wasm.greet("WebAssembly with npm");
```

Dies importiert das Modul aus dem `node_modules`-Ordner und ruft die `greet`-Funktion auf, wobei `"WebAssembly with npm"` als String übergeben wird. Beachten Sie, dass hier nichts Besonderes ist, und dennoch rufen wir in Rust-Code auf. Was den JavaScript-Code betrifft, handelt es sich hier nur um ein normales Modul.

Schließlich müssen wir eine HTML-Datei hinzufügen, um das JavaScript zu laden. Erstellen Sie eine `index.html`-Datei und fügen Sie Folgendes hinzu:

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

Das `hello-wasm/site`-Verzeichnis sollte so aussehen:

```plain
├── node_modules
├── index.html
├── index.js
├── package-lock.json
├── package.json
└── webpack.config.js
```

Wir sind mit der Dateierstellung fertig. Lassen Sie es uns ausprobieren:

```bash
npm run serve
```

Dies startet einen Webserver und öffnet `http://localhost:8080`. Sie sollten ein Meldungsfeld auf dem Bildschirm sehen, das den Text `Hello, WebAssembly with npm!` enthält. Wir haben erfolgreich das Rust-Modul mit npm verwendet!

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

Um auf npm zu veröffentlichen, benötigen Sie ein [npm-Konto](https://www.npmjs.com/) und müssen Ihr Gerät mit [`npm adduser`](https://docs.npmjs.com/cli/v10/commands/npm-adduser/) autorisieren.
Wenn Sie bereit sind, können Sie mit `wasm-pack` veröffentlichen, das `npm publish` im Hintergrund aufruft:

```bash
wasm-pack publish
```

## Fazit

Das ist das Ende unseres Tutorials; wir hoffen, Sie fanden es nützlich.

Es gibt viele spannende Fortschritte in diesem Bereich; wenn Sie helfen möchten, es noch besser zu machen, schauen Sie in die [Rust und WebAssembly Arbeitsgruppe](https://github.com/rustwasm/team/blob/master/README.md#get-involved).
