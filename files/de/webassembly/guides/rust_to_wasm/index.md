---
title: Kompilieren von Rust zu WebAssembly
slug: WebAssembly/Guides/Rust_to_Wasm
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Wenn Sie einige Rust-Code haben, können Sie ihn in [WebAssembly](/de/docs/WebAssembly) (Wasm) kompilieren. Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt in WebAssembly kompilieren und in einer bestehenden Webanwendung verwenden können.

## Anwendungsfälle für Rust und WebAssembly

Es gibt zwei Hauptanwendungsfälle für Rust und WebAssembly:

- Aufbau einer kompletten Anwendung – eine gesamte Web-App auf Basis von Rust.
- Aufbau eines Teils einer Anwendung – Verwendung von Rust in einem bestehenden JavaScript-Frontend.

Derzeit konzentriert sich das Rust-Team auf den zweiten Fall, und das behandeln wir hier. Für den ersten Fall sollten Sie sich Projekte wie [`yew`](https://github.com/yewstack/yew) und [leptos](https://github.com/leptos-rs/leptos) ansehen.

In diesem Tutorial bauen wir ein Paket mit `wasm-pack`, einem Werkzeug zur Erstellung von JavaScript-Paketen in Rust. Dieses Paket wird nur WebAssembly- und JavaScript-Code enthalten, sodass Benutzer Rust nicht installiert haben müssen. Sie werden möglicherweise nicht einmal bemerken, dass es in Rust geschrieben ist.

## Rust-Umgebung einrichten

Wir beginnen mit dem Einrichten der notwendigen Umgebung.

### Rust installieren

Installieren Sie Rust, indem Sie die Seite [Install Rust](https://www.rust-lang.org/tools/install) besuchen und den Anweisungen folgen. Dadurch wird ein Tool namens "rustup" installiert, mit dem Sie mehrere Versionen von Rust verwalten können. Standardmäßig wird die neueste stabile Version von Rust installiert, die Sie für die allgemeine Rust-Entwicklung verwenden können. Rustup installiert `rustc`, den Rust-Compiler, `cargo`, Rusts Paketmanager, `rust-std`, Rusts Standardbibliotheken, und einige hilfreiche Dokumentationen – `rust-docs`.

> [!NOTE]
> Achten Sie auf die Hinweisnachricht nach der Installation, dass das `bin`-Verzeichnis von Cargo in Ihre System-`PATH` aufgenommen werden muss. Dies wird automatisch hinzugefügt, jedoch müssen Sie Ihr Terminal neu starten, damit es wirksam wird.

### wasm-pack

Um das Paket zu bauen, benötigen wir ein zusätzliches Tool namens `wasm-pack`. Es hilft dabei, den Code zu WebAssembly zu kompilieren und das richtige Packaging für die Verwendung im Browser zu erstellen. Um es herunterzuladen und zu installieren, geben Sie den folgenden Befehl in Ihr Terminal ein:

```bash
cargo install wasm-pack
```

## Unser WebAssembly-Paket bauen

Genug vorbereitet; lassen Sie uns ein neues Paket in Rust erstellen. Navigieren Sie zu dem Ort, an dem Sie Ihre Projekte speichern, und geben Sie Folgendes ein:

```bash
cargo new --lib hello-wasm
```

Dies erstellt eine neue Bibliothek in einem Unterverzeichnis namens `hello-wasm` mit allem, was Sie zum Starten benötigen:

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

`Cargo.toml` ist die Datei, die unseren Build konfiguriert. Sie funktioniert ähnlich wie `Gemfile` von Bundler oder `package.json` von npm.

Cargo hat uns auch etwas Rust-Code in `src/lib.rs` generiert:

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

Wir werden den generierten `src/lib.rs`-Code oben nicht verwenden; ersetzen Sie ihn durch den folgenden:

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

Unser Rust-Code hat drei Hauptteile; lassen Sie uns jeden kurz besprechen. Wir geben hier eine allgemeine Erklärung und gehen über einige Details hinweg; um mehr über Rust zu erfahren, sehen Sie sich das kostenlose Online-Buch [The Rust Programming Language](https://doc.rust-lang.org/book/) an.

#### Verwendung von `wasm-bindgen` zur Kommunikation zwischen Rust und JavaScript

Der erste Teil sieht so aus:

```rust
use wasm_bindgen::prelude::*;
```

Bibliotheken werden in Rust "Crates" genannt.

Verstehen Sie? _Cargo_ liefert _Crates_ aus.

Die erste Zeile enthält einen `use`-Befehl, der Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles aus dem Modul `wasm_bindgen::prelude`. Wir verwenden diese Funktionen im nächsten Abschnitt.

Bevor wir zum nächsten Abschnitt übergehen, sollten wir mehr über `wasm-bindgen` sprechen.

`wasm-pack` verwendet `wasm-bindgen`, ein weiteres Tool, um eine Brücke zwischen den Typen von JavaScript und Rust bereitzustellen. Es ermöglicht JavaScript, eine Rust-API mit einem String aufzurufen, oder eine Rust-Funktion, eine JavaScript-Ausnahme abzufangen.

Wir verwenden die Funktionalität von `wasm-bindgen` in unserem Paket. Tatsächlich ist das der nächste Abschnitt.

#### Aufrufen externer Funktionen in JavaScript aus Rust

Der nächste Teil sieht so aus:

```rust
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}
```

Das Stück innerhalb des `#[ ]` wird "Attribut" genannt und modifiziert auf irgendeine Weise die nächste Anweisung. In diesem Fall ist diese Anweisung ein `extern`, das Rust mitteilt, dass wir einige extern definierte Funktionen aufrufen möchten. Das Attribut sagt, dass "wasm-bindgen weiß, wie man diese Funktionen findet".

Die dritte Zeile ist eine Funktionssignatur, geschrieben in Rust. Sie besagt, dass "die Funktion `alert` ein Argument annimmt, einen String namens `s`."

Wie Sie vielleicht vermuten, ist dies [die `alert`-Funktion, die von JavaScript bereitgestellt wird](/de/docs/Web/API/Window/alert). Wir rufen diese Funktion im nächsten Abschnitt auf.

Wann immer Sie JavaScript-Funktionen aufrufen möchten, können Sie sie zu dieser Datei hinzufügen, und `wasm-bindgen` richtet alles für Sie ein. Noch nicht alles wird unterstützt, aber wir arbeiten daran. Bitte [melden Sie Fehler](https://github.com/rustwasm/wasm-bindgen/issues/new), wenn etwas fehlt.

#### Erstellen von Rust-Funktionen, die von JavaScript aufgerufen werden können

Der letzte Teil ist dieser:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Erneut sehen wir das Attribut `#[wasm_bindgen]`. In diesem Fall modifiziert es keinen `extern`-Block, sondern eine `fn`; das bedeutet, dass wir möchten, dass diese Rust-Funktion von JavaScript aufgerufen werden kann. Es ist das Gegenteil von `extern`: hierbei handelt es sich nicht um die Funktionen, die wir benötigen, sondern um die Funktionen, die wir der Welt zur Verfügung stellen.

Diese Funktion heißt `greet` und nimmt ein Argument, einen String (geschrieben `&str`), namens `name`. Sie ruft dann die `alert`-Funktion auf, die wir im `extern`-Block oben angefordert haben. Sie übergibt einen Aufruf an das Makro `format!`, das uns erlaubt, Strings zu verketten.

Das Makro `format!` nimmt in diesem Fall zwei Argumente: einen Formatstring und eine Variable, die darin eingesetzt wird. Der Formatstring ist das `"Hello, {}!"` Stück. Es enthält `{}`s, wo Variablen interpoliert werden. Die Variable, die wir übergeben, ist `name`, das Argument der Funktion; wenn wir `greet("Steve")` aufrufen, sollten wir `"Hello, Steve!"` sehen.

Dies wird an `alert()` übergeben, sodass wir beim Aufruf dieser Funktion ein Alert-Fenster mit "Hello, Steve!" sehen werden.

Jetzt, da unsere Bibliothek geschrieben ist, lassen Sie sie uns bauen.

### Kompilieren unseres Codes zu WebAssembly

Um unseren Code korrekt zu kompilieren, konfigurieren wir ihn zuerst mit `Cargo.toml`. Öffnen Sie diese Datei und ändern Sie ihren Inhalt, damit sie so aussieht:

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

Fügen Sie Ihr eigenes Repository ein und verwenden Sie die gleichen Angaben, die `git` für das `authors`-Feld verwendet.

Der große Teil, der hinzugefügt wird, ist der `[package]`. Der `[lib]`-Teil sagt Rust, dass es eine `cdylib`-Version unseres Pakets bauen soll; darauf gehen wir in diesem Tutorial nicht weiter ein. Für mehr Informationen konsultieren Sie die [Cargo](https://doc.rust-lang.org/cargo/guide/)- und [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html)-Dokumentation.

Der letzte Abschnitt ist der `[dependencies]`-Abschnitt. Hier sagen wir Cargo, welche Version von `wasm-bindgen` wir verwenden möchten; in diesem Fall ist das jede `0.2.z`-Version (aber nicht `0.3.0` oder höher).

### Das Paket bauen

Nachdem wir die Einrichtung abgeschlossen haben, lassen Sie uns das Paket bauen.
Wir werden den generierten Code in einem nativen ES-Modul und Node.js verwenden.
Zu diesem Zweck verwenden wir das [`--target` Argument](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) in `wasm-pack build`, um anzugeben, welche Art von WebAssembly und JavaScript generiert wird.

Führen Sie zunächst den folgenden Befehl in Ihrem `hello-wasm`-Verzeichnis aus:

```bash
wasm-pack build --target web
```

Dies tut mehrere Dinge. Um sie im Detail zu erfahren, schauen Sie sich [diesen Blogbeitrag auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/) an. Kurz gesagt, `wasm-pack build`:

1. Kompiliert Ihren Rust-Code zu WebAssembly.
2. Führt `wasm-bindgen` auf diesem WebAssembly aus und generiert eine JavaScript-Datei, die diese WebAssembly-Datei in ein Modul einwickelt, das der Browser versteht.
3. Erstellt ein `pkg`-Verzeichnis und verschiebt diese JavaScript-Datei und Ihren WebAssembly-Code dorthin.
4. Liest Ihre `Cargo.toml` und erzeugt ein entsprechendes `package.json`.
5. Kopiert Ihr `README.md` (falls vorhanden) in das Paket.

Das Endergebnis? Sie haben ein Paket im `pkg`-Verzeichnis.

## Das Paket im Web verwenden

Jetzt, da wir ein kompiliertes Wasm-Modul haben, lassen Sie es uns im Browser ausführen.
Erstellen wir zuerst eine Datei namens `index.html` im Stammverzeichnis des Projekts, sodass wir die folgende Projektstruktur haben:

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

Das Skript in dieser Datei wird den JavaScript-Glue-Code importieren, das Wasm-Modul initialisieren und die `greet`-Funktion aufrufen, die wir in Rust geschrieben haben.

Bedienen Sie das Projektstammverzeichnis mit einem lokalen Webserver (z. B. `python3 -m http.server`). Falls Sie nicht wissen, wie das geht, siehe [Einen einfachen lokalen HTTP-Server betreiben](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

> [!NOTE]
> Verwenden Sie einen aktuellen Webserver, der den MIME-Typ `application/wasm` unterstützt. Ältere Webserver unterstützen diesen möglicherweise noch nicht.

Laden Sie `index.html` vom Webserver (wenn Sie das Python3-Beispiel verwendet haben: `http://localhost:8000`). Ein Alert-Fenster erscheint auf dem Bildschirm mit `Hello, WebAssembly!`. Wir haben erfolgreich von JavaScript in Rust und von Rust in JavaScript aufgerufen.

## Unser Paket für npm verfügbar machen

Wir bauen ein npm-Paket, daher müssen Sie Node.js und npm installiert haben.

Um Node.js und npm zu erhalten, besuchen Sie die Seite [Get npm!](https://docs.npmjs.com/getting-started/) und befolgen Sie die Anweisungen.
Dieses Tutorial zielt auf Node 20 ab. Um zwischen Node-Versionen zu wechseln, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Um das WebAssembly-Modul mit npm zu verwenden, müssen wir ein paar Änderungen vornehmen.
Beginnen wir damit, unser Rust mit `bundler`-Option als Ziel neu zu kompilieren:

```bash
wasm-pack build --target bundler
```

Wir haben jetzt ein npm-Paket, das in Rust geschrieben, aber zu WebAssembly kompiliert wurde. Es ist bereit zur Verwendung von JavaScript aus und erfordert nicht, dass der Benutzer Rust installiert hat; der enthaltene Code war der WebAssembly-Code, nicht der Rust-Quellcode.

### Das npm-Paket im Web verwenden

Erstellen wir eine Website, die unser neues npm-Paket verwendet. Viele Menschen verwenden npm-Pakete über verschiedene Bundler-Tools, und wir werden eines davon, `webpack`, in diesem Tutorial verwenden. Es ist nur ein wenig komplex und zeigt einen realistischen Anwendungsfall.

Lassen Sie uns ein neues Verzeichnis innerhalb des `hello-wasm` Verzeichnisses namens `site` erstellen, um es auszuprobieren.
Wir haben das Paket noch nicht im npm-Register veröffentlicht, daher können wir es von einer lokalen Version mit `npm i /path/to/package` installieren.
Sie können [`npm link`](https://docs.npmjs.com/cli/v10/commands/npm-link/) verwenden, aber die Installation von einem lokalen Pfad ist praktisch für diese Demo:

```bash
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die `webpack` Dev-Abhängigkeiten:

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@5 copy-webpack-plugin@12
```

Als nächstes müssen wir webpack konfigurieren. Erstellen Sie `webpack.config.js` und geben Sie Folgendes ein:

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

In Ihrem `package.json` können Sie `build` und `serve` Skripte hinzufügen, die webpack mit der von uns gerade erstellten Konfigurationsdatei ausführen:

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

Dies importiert das Modul aus dem `node_modules`-Ordner und ruft die `greet`-Funktion auf, wobei es `"WebAssembly with npm"` als String übergibt. Beachten Sie, dass hier nichts Besonderes ist, und doch rufen wir Rust-Code auf. Was den JavaScript-Code betrifft, sieht dies einfach wie ein normales Modul aus.

Schließlich müssen wir eine HTML-Datei hinzufügen, um das JavaScript zu laden. Erstellen Sie eine `index.html` Datei und fügen Sie Folgendes hinzu:

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

Wir sind fertig mit den Dateien. Versuchen wir es:

```bash
npm run serve
```

Dies startet einen Webserver und öffnet `http://localhost:8080`. Sie sollten ein Alert-Fenster auf dem Bildschirm sehen, das den Text `Hello, WebAssembly with npm!` enthält. Wir haben erfolgreich das Rust-Modul mit npm verwendet!

Wenn Sie Ihr WebAssembly außerhalb der lokalen Entwicklung verwenden möchten, können Sie das Paket mit den Befehlen `pack` und `publish` in Ihrem `hello-wasm` Verzeichnis veröffentlichen:

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
Wenn Sie bereit sind, können Sie mit `wasm-pack` veröffentlichen, das `npm publish` im Hintergrund aufruft:

```bash
wasm-pack publish
```

## Fazit

Das ist das Ende unseres Tutorials; wir hoffen, Sie fanden es nützlich.

Es gibt viele spannende Arbeiten in diesem Bereich; wenn Sie helfen möchten, es noch besser zu machen, schauen Sie sich die [Rust and WebAssembly Working Group](https://github.com/rustwasm/team/blob/master/README.md#get-involved) an.
