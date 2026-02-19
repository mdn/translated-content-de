---
title: Kompilieren von Rust zu WebAssembly
slug: WebAssembly/Guides/Rust_to_Wasm
l10n:
  sourceCommit: e134d50d779647ba26ee41d7bbefc8d3b4e8fba6
---

Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt in WebAssembly kompilieren und es in einer bestehenden Webanwendung verwenden.

## Anwendungsfälle für Rust und WebAssembly

Es gibt zwei Hauptanwendungsfälle für Rust und WebAssembly:

- Eine gesamte Anwendung erstellen — eine vollständige Web-App, die auf Rust basiert.
- Einen Teil einer Anwendung erstellen — Rust in einer bestehenden JavaScript-Frontend verwenden.

Derzeit konzentriert sich das Rust-Team auf den letzteren Fall, und daher behandeln wir dies hier. Für den ersten Fall schauen Sie sich Projekte wie [`yew`](https://github.com/yewstack/yew) und [leptos](https://github.com/leptos-rs/leptos) an.

In diesem Tutorial erstellen wir ein Paket mit `wasm-pack`, einem Tool zum Erstellen von JavaScript-Paketen in Rust. Dieses Paket wird nur WebAssembly- und JavaScript-Code enthalten, sodass Benutzer Rust nicht installiert haben müssen. Sie werden möglicherweise nicht einmal bemerken, dass es in Rust geschrieben wurde.

## Einrichtung der Rust-Umgebung

Wir beginnen mit der Einrichtung der notwendigen Umgebung.

### Installation von Rust

Installieren Sie Rust, indem Sie die [Rust installieren](https://rust-lang.org/tools/install/) Seite besuchen und den Anweisungen folgen. Dies installiert ein Tool namens "rustup", mit dem Sie mehrere Versionen von Rust verwalten können. Standardmäßig wird die neueste stabile Rust-Version installiert, die Sie für die allgemeine Rust-Entwicklung verwenden können. Rustup installiert `rustc`, den Rust-Compiler, `cargo`, Rusts Paketmanager, `rust-std`, Rusts Standardbibliotheken, und einige hilfreiche Dokumentationen — `rust-docs`.

> [!NOTE]
> Achten Sie auf den Hinweis nach der Installation, dass das `bin` Verzeichnis von cargo in Ihrem System `PATH` enthalten sein muss. Dies wird automatisch hinzugefügt, aber Sie müssen Ihr Terminal neu starten, damit es wirksam wird.

### wasm-pack

Um das Paket zu erstellen, benötigen wir ein zusätzliches Tool, `wasm-pack`. Dies hilft, den Code in WebAssembly zu kompilieren und das richtige Paket für die Verwendung im Browser zu erstellen. Um es herunterzuladen und zu installieren, geben Sie den folgenden Befehl in Ihr Terminal ein:

```bash
cargo install wasm-pack
```

## Erstellen unseres WebAssembly-Pakets

Genug mit der Einrichtung; lassen Sie uns ein neues Paket in Rust erstellen. Navigieren Sie zu dem Verzeichnis, in dem Sie Ihre Projekte führen, und geben Sie Folgendes ein:

```bash
cargo new --lib hello-wasm
```

Dies erstellt eine neue Bibliothek in einem Unterverzeichnis namens `hello-wasm` mit allem, was Sie für den Anfang benötigen:

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

`Cargo.toml` ist die Datei, die unseren Build konfiguriert. Es funktioniert ähnlich wie `Gemfile` von Bundler oder `package.json` von npm.

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

### Lassen Sie uns etwas Rust schreiben

Wir werden den generierten `src/lib.rs` Code nicht verwenden; ersetzen Sie ihn durch den folgenden:

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

Unser Rust-Code besteht aus drei Hauptteilen; lassen Sie uns jeden einzeln durchgehen. Wir geben hier eine allgemeine Erklärung und übergehen einige Details; um mehr über Rust zu erfahren, lesen Sie bitte das kostenlose Online-Buch [The Rust Programming Language](https://doc.rust-lang.org/book/).

#### `wasm-bindgen` verwenden, um zwischen Rust und JavaScript zu kommunizieren

Der erste Teil sieht so aus:

```rust
use wasm_bindgen::prelude::*;
```

Bibliotheken werden in Rust "Crates" genannt.

Verstanden? _Cargo_ transportiert _Crates_.

Die erste Zeile enthält ein `use` Befehl, das Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles im `wasm_bindgen::prelude` Modul. Diese Funktionen verwenden wir im nächsten Abschnitt.

Bevor wir zum nächsten Abschnitt übergehen, sollten wir mehr über `wasm-bindgen` sprechen.

`wasm-pack` verwendet `wasm-bindgen`, ein weiteres Tool, um eine Brücke zwischen den Typen von JavaScript und Rust zu bieten. Es ermöglicht JavaScript, eine Rust-API mit einem String aufzurufen oder eine Rust-Funktion, eine JavaScript-Ausnahme abzufangen.

Wir verwenden die Funktionalität von `wasm-bindgen` in unserem Paket. Tatsächlich ist das der nächste Abschnitt.

#### Aufrufen externer Funktionen in JavaScript von Rust aus

Der nächste Teil sieht so aus:

```rust
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}
```

Das Stück innerhalb der `#[ ]` wird als "Attribut" bezeichnet und verändert die folgende Anweisung irgendwie. In diesem Fall ist diese Anweisung ein `extern`, das Rust mitteilt, dass wir einige extern definierte Funktionen aufrufen möchten. Das Attribut sagt "wasm-bindgen weiß, wie man diese Funktionen findet".

Die dritte Zeile ist eine Funktionssignatur, geschrieben in Rust. Sie besagt "die `alert` Funktion nimmt ein Argument, einen String namens `s`."

Wie Sie vielleicht vermuten, ist dies [die `alert` Funktion, die von JavaScript bereitgestellt wird](/de/docs/Web/API/Window/alert). Wir rufen diese Funktion im nächsten Abschnitt auf.

Wann immer Sie JavaScript-Funktionen aufrufen möchten, können Sie sie in diese Datei hinzufügen, und `wasm-bindgen` richtet alles für Sie ein. Nicht alles wird bisher unterstützt, aber wir arbeiten daran. Bitte [melden Sie Fehler](https://github.com/rustwasm/wasm-bindgen/issues/new), wenn etwas fehlt.

#### Rust-Funktionen produzieren, die von JavaScript aufgerufen werden können

Der letzte Teil ist dieser hier:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Wir sehen erneut das `#[wasm_bindgen]` Attribut. In diesem Fall verändert es keinen `extern` Block, sondern ein `fn`; das bedeutet, dass wir möchten, dass diese Rust-Funktion von JavaScript aufgerufen werden kann. Es ist das Gegenteil von `extern`: dies sind nicht die Funktionen, die wir benötigen, sondern vielmehr die Funktionen, die wir der Welt geben.

Diese Funktion trägt den Namen `greet` und nimmt ein Argument, einen String (geschrieben `&str`), `name`. Dann ruft sie die `alert` Funktion auf, die wir im `extern` Block oben angefordert haben. Sie übergibt einen Aufruf an das `format!` Makro, das uns das Verketteln von Strings ermöglicht.

Das `format!` Makro nimmt in diesem Fall zwei Argumente: einen Formatstring und eine Variable, die darin eingesetzt wird. Der Formatstring ist das `"Hello, {}!"` Stück. Es enthält `{}`s, wo Variablen interpoliert werden. Die Variable, die wir übergeben, ist `name`, das Argument der Funktion, sodass wenn wir `greet("Steve")` aufrufen, wir `"Hello, Steve!"` sehen sollten.

Dies wird an `alert()` übergeben, sodass wir, wenn wir diese Funktion aufrufen, ein Alarmfenster mit "Hello, Steve!" darin sehen.

Jetzt, da unsere Bibliothek geschrieben ist, lass sie uns bauen.

### Unseren Code zu WebAssembly kompilieren

Um unseren Code korrekt zu kompilieren, müssen wir ihn zuerst mit `Cargo.toml` konfigurieren. Öffnen Sie diese Datei und ändern Sie ihren Inhalt so, dass er so aussieht:

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

Fügen Sie Ihr eigenes Repository hinzu und verwenden Sie die gleichen Informationen, die `git` für das `authors` Feld verwendet.

Der große Teil, der hinzugefügt werden muss, ist der `[package]`. Der `[lib]` Teil sagt Rust, dass es eine `cdylib` Version unseres Pakets bauen soll; wir werden nicht auf die Einzelheiten eingehen, was das bedeutet. Weitere Informationen finden Sie in der [Cargo](https://doc.rust-lang.org/cargo/guide/) und [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html) Dokumentation.

Der letzte Abschnitt ist der `[dependencies]` Abschnitt. Hier sagen wir Cargo, welche Version von `wasm-bindgen` wir als Abhängigkeit verwenden möchten; in diesem Fall ist das jede `0.2.z` Version (aber nicht `0.3.0` oder höher).

### Erstellen des Pakets

Nachdem wir die Einrichtung abgeschlossen haben, lass uns das Paket bauen.
Wir werden den generierten Code in einem nativen ES-Modul und Node.js verwenden.
Zu diesem Zweck verwenden wir das [`--target` Argument](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) in `wasm-pack build`, um anzugeben, welche Art von WebAssembly und JavaScript generiert wird.

Zuerst führen Sie den folgenden Befehl in Ihrem `hello-wasm` Verzeichnis aus:

```bash
wasm-pack build --target web
```

Das macht mehrere Dinge. Um mehr darüber zu erfahren, lesen Sie [diesen Blogbeitrag auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). Kurz gesagt, `wasm-pack build`:

1. Kompiliert Ihren Rust-Code zu WebAssembly.
2. Führt `wasm-bindgen` auf diesem WebAssembly aus und generiert eine JavaScript-Datei, die diese WebAssembly-Datei in ein Modul verpackt, das der Browser verstehen kann.
3. Erstellt ein `pkg` Verzeichnis und verschiebt diese JavaScript-Datei und Ihren WebAssembly-Code dorthin.
4. Liest Ihre `Cargo.toml` und erstellt ein entsprechendes `package.json`.
5. Kopiert Ihre `README.md` (falls vorhanden) in das Paket.

Das Endergebnis? Sie haben ein Paket im `pkg` Verzeichnis.

## Verwenden des Pakets im Web

Jetzt, da wir ein kompiliertes Wasm-Modul haben, lass es uns im Browser ausführen.
Beginnen wir mit dem Erstellen einer Datei namens `index.html` im Stammverzeichnis des Projekts, sodass wir die folgende Projektstruktur haben:

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

Geben Sie den folgenden Inhalt in die `index.html` Datei ein:

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

Das Skript in dieser Datei wird den JavaScript-Klebecode importieren, das Wasm-Modul initialisieren und die `greet` Funktion aufrufen, die wir in Rust geschrieben haben.

Bedienen Sie den Projektstamm mit einem lokalen Webserver (z.B. `python3 -m http.server`). Wenn Sie nicht sicher sind, wie das geht, lesen Sie [Einfachen lokalen HTTP-Server ausführen](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

> [!NOTE]
> Verwenden Sie einen aktuellen Webserver, der den `application/wasm` MIME-Typ unterstützt. Ältere Webserver unterstützen dies möglicherweise noch nicht.

Laden Sie `index.html` vom Webserver (wenn Sie das Python3-Beispiel verwendet haben: `http://localhost:8000`). Ein Alarmfenster erscheint auf dem Bildschirm mit dem Inhalt `Hello, WebAssembly!`. Wir haben erfolgreich von JavaScript nach Rust und von Rust nach JavaScript aufgerufen.

## Unser Paket für npm verfügbar machen

Wir erstellen ein npm-Paket, daher müssen Sie Node.js und npm installiert haben.

Um Node.js und npm zu erhalten, gehen Sie zur [Get npm!](https://docs.npmjs.com/getting-started/) Seite und folgen Sie den Anweisungen.
Dieses Tutorial zielt auf Node 20 ab. Um zwischen Node-Versionen zu wechseln, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Um das WebAssembly-Modul mit npm zu verwenden, müssen wir einige Änderungen vornehmen.
Beginnen wir mit dem erneuten Kompilieren unseres Rust mit der `bundler` Option als Ziel:

```bash
wasm-pack build --target bundler
```

Wir haben nun ein npm-Paket, das in Rust geschrieben, aber zu WebAssembly kompiliert wurde. Es ist bereit zur Verwendung durch JavaScript und erfordert nicht, dass der Benutzer Rust installiert; der enthaltene Code war der WebAssembly-Code, nicht der Rust-Quellcode.

### Das npm-Paket im Web verwenden

Lassen Sie uns eine Website erstellen, die unser neues npm-Paket verwendet. Viele Leute verwenden npm-Pakete durch verschiedene Bundler-Tools, und wir werden eins davon, `webpack`, in diesem Tutorial verwenden. Es ist nur ein wenig komplex und zeigt einen realistischen Anwendungsfall.

Lassen Sie uns ein neues Verzeichnis innerhalb des `hello-wasm` Verzeichnisses namens `site` erstellen, um es auszuprobieren.
Wir haben das Paket noch nicht im npm-Register veröffentlicht, also können wir es von einer lokalen Version installieren, indem wir `npm i /path/to/package` verwenden.
Sie können [`npm link`](https://docs.npmjs.com/cli/v10/commands/npm-link/) verwenden, aber das Installieren von einem lokalen Pfad ist für diese Demo praktisch:

```bash
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die `webpack` Entwicklungsabhängigkeiten:

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@5 copy-webpack-plugin@12
```

Als nächstes müssen wir webpack konfigurieren. Erstellen Sie `webpack.config.js` und fügen Sie folgendes ein:

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

In Ihrem `package.json` können Sie `build` und `serve` Skripte hinzufügen, die webpack mit der von uns gerade erstellten Konfigurationsdatei ausführen werden:

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

Erstellen Sie als nächstes eine Datei namens `index.js` und geben Sie ihr diesen Inhalt:

```js
import * as wasm from "hello-wasm";

wasm.greet("WebAssembly with npm");
```

Dies importiert das Modul aus dem `node_modules` Ordner und ruft die `greet` Funktion auf, wobei `"WebAssembly with npm"` als String übergeben wird. Beachten Sie, dass hier nichts Besonderes ist, und dennoch rufen wir Rust-Code auf. Aus Sicht des JavaScript-Codes ist dies einfach ein normales Modul.

Schließlich müssen wir eine HTML-Datei hinzufügen, um das JavaScript zu laden. Erstellen Sie eine `index.html` Datei und fügen Sie folgendes hinzu:

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

Das `hello-wasm/site` Verzeichnis sollte nun so aussehen:

```plain
├── node_modules
├── index.html
├── index.js
├── package-lock.json
├── package.json
└── webpack.config.js
```

Wir haben keine weiteren Dateien mehr zu erstellen. Probieren wir es aus:

```bash
npm run serve
```

Dies startet einen Webserver und öffnet `http://localhost:8080`. Sie sollten ein Alarmfenster auf dem Bildschirm sehen, das den Text `Hello, WebAssembly with npm!` enthält. Wir haben das Rust-Modul erfolgreich mit npm verwendet!

Wenn Sie Ihr WebAssembly außerhalb der lokalen Entwicklung verwenden möchten, können Sie das Paket mit den `pack` und `publish` Befehlen in Ihrem `hello-wasm` Verzeichnis veröffentlichen:

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
Wenn Sie bereit sind, können Sie mit `wasm-pack` veröffentlichen, welches `npm publish` im Hintergrund aufruft:

```bash
wasm-pack publish
```

## Fazit

Dies ist das Ende unseres Tutorials; wir hoffen, Sie fanden es nützlich.

Es gibt viele aufregende Arbeiten in diesem Bereich. Wenn Sie helfen möchten, es noch besser zu machen, sehen Sie sich die [Rust und WebAssembly Arbeitsgruppe](https://github.com/rustwasm/team/blob/master/README.md#get-involved) an.
