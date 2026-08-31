---
title: Kompilieren von Rust zu WebAssembly
slug: WebAssembly/Guides/Rust_to_Wasm
l10n:
  sourceCommit: 26fb7eaa7b398a35c2463fa15ab6ccfa46a9e06d
---

Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt in WebAssembly kompilieren und es in einer bestehenden Webanwendung verwenden können.

## Anwendungsfälle für Rust und WebAssembly

Es gibt zwei Hauptanwendungsfälle für Rust und WebAssembly:

- Eine vollständige Anwendung entwickeln – eine komplette Web-App, die auf Rust basiert.
- Einen Teil einer Anwendung entwickeln – Rust in einem bestehenden JavaScript-Frontend verwenden.

Derzeit konzentriert sich das Rust-Team auf den letzteren Fall, und deshalb behandeln wir das hier. Für den ersteren Fall sollten Sie sich Projekte wie [`yew`](https://github.com/yewstack/yew) und [leptos](https://github.com/leptos-rs/leptos) ansehen.

In diesem Tutorial erstellen wir ein Paket mit `wasm-pack`, einem Tool zum Erstellen von JavaScript-Paketen in Rust. Dieses Paket wird nur WebAssembly- und JavaScript-Code enthalten, sodass Benutzer kein Rust installiert haben müssen. Sie werden möglicherweise nicht einmal bemerken, dass es in Rust geschrieben ist.

## Rust-Umgebung einrichten

Wir beginnen damit, die notwendige Umgebung einzurichten.

### Rust installieren

Installieren Sie Rust, indem Sie die Seite [Install Rust](https://rust-lang.org/tools/install/) aufrufen und den Anweisungen folgen. Dadurch wird ein Tool namens "rustup" installiert, mit dem Sie mehrere Versionen von Rust verwalten können. Standardmäßig wird die neueste stabile Rust-Version installiert, die Sie für die allgemeine Rust-Entwicklung verwenden können. Rustup installiert `rustc`, den Rust-Compiler, `cargo`, Rusts Paketmanager, `rust-std`, die Rust-Standardbibliotheken und einige hilfreiche Dokumentationen — `rust-docs`.

> [!NOTE]
> Achten Sie auf die Nachinstallationshinweise bezüglich des `bin`-Verzeichnisses von Cargo in Ihrem System `PATH`. Dies wird automatisch hinzugefügt, aber Sie müssen Ihr Terminal neu starten, damit es wirksam wird.

### wasm-pack

Zum Erstellen des Pakets benötigen wir ein zusätzliches Tool, `wasm-pack`. Dies hilft, den Code in WebAssembly zu kompilieren und die richtige Paketierung für den Einsatz im Browser bereitzustellen. Um es herunterzuladen und zu installieren, geben Sie den folgenden Befehl in Ihrem Terminal ein:

```bash
cargo install wasm-pack
```

## Unser WebAssembly-Paket erstellen

Genug eingerichtet; lassen Sie uns ein neues Paket in Rust erstellen. Navigieren Sie zu dem Verzeichnis, in dem Sie Ihre Projekte speichern, und geben Sie folgendes ein:

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

Wir werden den generierten `src/lib.rs`-Code nicht verwenden; ersetzen Sie ihn durch folgenden:

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

Unser Rust-Code hat drei Hauptteile; lassen Sie uns jeden nacheinander besprechen. Wir geben hier eine allgemeine Erklärung und übergehen einige Details; um mehr über Rust zu erfahren, lesen Sie bitte das kostenlose Online-Buch [The Rust Programming Language](https://doc.rust-lang.org/book/).

#### Verwendung von `wasm-bindgen` zur Kommunikation zwischen Rust und JavaScript

Der erste Teil sieht so aus:

```rust
use wasm_bindgen::prelude::*;
```

In Rust werden Bibliotheken "Crates" genannt.

Verstanden? _Cargo_ versendet _Crates_.

Die erste Zeile enthält ein `use`-Kommando, das Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles aus dem Modul `wasm_bindgen::prelude`. Wir verwenden diese Funktionen im nächsten Abschnitt.

Bevor wir zum nächsten Abschnitt übergehen, sollten wir mehr über `wasm-bindgen` sprechen.

`wasm-pack` verwendet `wasm-bindgen`, ein weiteres Tool, um eine Brücke zwischen den Typen von JavaScript und Rust zu bilden. Es ermöglicht JavaScript, eine Rust-API mit einem String aufzurufen, oder einer Rust-Funktion, eine JavaScript-Ausnahme abzufangen.

Wir verwenden die Funktionalität von `wasm-bindgen` in unserem Paket. Tatsächlich ist das der nächste Abschnitt.

#### Aufrufen externer Funktionen in JavaScript aus Rust

Der nächste Teil sieht so aus:

```rust
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}
```

Das Bit innerhalb der `#[ ]` wird als "Attribut" bezeichnet und modifiziert die nächste Anweisung in irgendeiner Weise. In diesem Fall ist diese Anweisung ein `extern`, das Rust mitteilt, dass wir einige extern definierte Funktionen aufrufen möchten. Das Attribut sagt: "wasm-bindgen weiß, wie man diese Funktionen findet".

Die dritte Zeile ist eine Funktionssignatur, die in Rust geschrieben ist. Sie besagt: "Die `alert`-Funktion nimmt ein Argument, einen String, benannt `s`."

Wie Sie vielleicht vermuten, handelt es sich dabei um [die `alert`-Funktion, die von JavaScript bereitgestellt wird](/de/docs/Web/API/Window/alert). Diese Funktion rufen wir im nächsten Abschnitt auf.

Wann immer Sie JavaScript-Funktionen aufrufen möchten, können Sie sie zu dieser Datei hinzufügen, und `wasm-bindgen` richtet alles für Sie ein. Noch nicht alles wird unterstützt, aber wir arbeiten daran. Bitte [melden Sie Fehler](https://github.com/rustwasm/wasm-bindgen/issues/new), wenn etwas fehlt.

#### Erstellen von Rust-Funktionen, die von JavaScript aufgerufen werden können

Der letzte Teil ist dieser:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Wieder einmal sehen wir das `#[wasm_bindgen]`-Attribut. In diesem Fall modifiziert es keinen `extern`-Block, sondern eine `fn`; dies bedeutet, dass wir möchten, dass diese Rust-Funktion von JavaScript aufgerufen werden kann. Es ist das Gegenteil von `extern`: dies sind nicht die Funktionen, die wir benötigen, sondern vielmehr die Funktionen, die wir der Welt zur Verfügung stellen.

Diese Funktion heißt `greet` und nimmt ein Argument, einen String (geschrieben `&str`), `name`. Sie ruft dann die `alert`-Funktion auf, die wir im `extern`-Block oben angefordert haben. Sie übergibt einen Aufruf an das `format!`-Makro, mit dem wir Strings verketten können.

Das `format!`-Makro nimmt in diesem Fall zwei Argumente: eine Formatzeichenfolge und eine Variable, die darin eingesetzt werden soll. Die Formatzeichenfolge ist der `"Hello, {}!"`-Teil. Sie enthält `{}`s, wo Variablen interpoliert werden. Die Variable, die wir übergeben, ist `name`, das Argument der Funktion, sodass wir, wenn wir `greet("Steve")` aufrufen, `"Hello, Steve!"` sehen sollten.

Dies wird an `alert()` übergeben, sodass wir, wenn wir diese Funktion aufrufen, ein Warnfeld mit "Hello, Steve!" darauf sehen.

Da unsere Bibliothek jetzt geschrieben ist, lassen Sie uns sie bauen.

### Unseren Code in WebAssembly kompilieren

Um unseren Code korrekt zu kompilieren, konfigurieren wir ihn zunächst mit `Cargo.toml`. Öffnen Sie diese Datei und ändern Sie ihren Inhalt, sodass sie so aussieht:

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

Tragen Sie Ihr eigenes Repository ein und verwenden Sie dieselben Informationen, die `git` für das `authors`-Feld verwendet.

Der große Teil, den Sie hinzufügen müssen, ist `\[package\]`. Der `[lib]`-Teil sagt Rust, dass eine `cdylib`-Version unseres Pakets gebaut werden soll; wir werden in diesem Tutorial nicht darauf eingehen, was das bedeutet. Für mehr Informationen konsultieren Sie die [Cargo](https://doc.rust-lang.org/cargo/guide/)- und [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html)-Dokumentation.

Der letzte Abschnitt ist der `[dependencies]`-Abschnitt. Hier sagen wir Cargo, welche Version von `wasm-bindgen` wir benötigen; in diesem Fall ist das jede `0.2.z`-Version (aber nicht `0.3.0` oder höher).

### Das Paket bauen

Da wir die Einrichtung abgeschlossen haben, bauen wir das Paket.
Wir werden den generierten Code in einem nativen ES-Modul und Node.js verwenden.
Zu diesem Zweck verwenden wir das [`--target`-Argument](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) im `wasm-pack build`, um anzugeben, welche Art von WebAssembly und JavaScript generiert wird.

Führen Sie zunächst den folgenden Befehl in Ihrem `hello-wasm`-Verzeichnis aus:

```bash
wasm-pack build --target web
```

Dieser Befehl führt mehrere Schritte aus. Um mehr darüber zu erfahren, lesen Sie diesen [Blogpost auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). Kurz gesagt, `wasm-pack build`:

1. Kompiliert Ihren Rust-Code in WebAssembly.
2. Führt `wasm-bindgen` auf diesem WebAssembly aus und generiert eine JavaScript-Datei, die diese WebAssembly-Datei in ein Modul verpackt, das der Browser verstehen kann.
3. Erstellt ein `pkg`-Verzeichnis und verschiebt diese JavaScript-Datei und Ihren WebAssembly-Code hinein.
4. Liest Ihre `Cargo.toml` und erzeugt ein äquivalentes `package.json`.
5. Kopiert Ihre `README.md` (falls vorhanden) in das Paket.

Das Endergebnis? Sie haben ein Paket im `pkg`-Verzeichnis.

## Das Paket im Web verwenden

Jetzt, da wir ein kompiliertes Wasm-Modul haben, lassen Sie uns es im Browser ausführen.
Beginnen wir damit, eine Datei namens `index.html` im Stammlaufwerk des Projekts zu erstellen, sodass wir folgende Projektstruktur erhalten:

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

Fügen Sie folgenden Inhalt in die `index.html`-Datei ein:

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

Das Skript in dieser Datei importiert den JavaScript-Zwischencode, initialisiert das Wasm-Modul und ruft die `greet`-Funktion auf, die wir in Rust geschrieben haben.

Dienen Sie das Projektstammverzeichnis mit einem lokalen Webserver (z.B. `python3 -m http.server`). Wenn Sie nicht sicher sind, wie das geht, siehe [Ausführen eines einfachen lokalen HTTP-Servers](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

> [!NOTE]
> Verwenden Sie einen aktuellen Webserver, der den MIME-Typ `application/wasm` unterstützt. Ältere Webserver unterstützen diesen möglicherweise noch nicht.

Laden Sie `index.html` von dem Webserver (wenn Sie das Python3-Beispiel verwendet haben: `http://localhost:8000`). Ein Warnfeld erscheint auf dem Bildschirm mit dem Inhalt `Hello, WebAssembly!`. Wir haben erfolgreich von JavaScript in Rust und von Rust in JavaScript aufgerufen.

## Unser Paket für npm verfügbar machen

Wir erstellen ein npm-Paket, daher müssen Sie Node.js und npm installiert haben.

Um Node.js und npm zu erhalten, gehen Sie zur Seite [Get npm!](https://docs.npmjs.com/getting-started/) und folgen Sie den Anweisungen.
Dieses Tutorial zielt auf Node 20 ab. Um zwischen verschiedenen Node-Versionen zu wechseln, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Um das WebAssembly-Modul mit npm zu verwenden, müssen wir einige Änderungen vornehmen.
Beginnen wir damit, unser Rust erneut mit der `bundler`-Option als Ziel zu kompilieren:

```bash
wasm-pack build --target bundler
```

Wir haben jetzt ein npm-Paket, das in Rust geschrieben, aber in WebAssembly kompiliert ist. Es ist bereit für die Nutzung aus JavaScript, und es erfordert nicht, dass der Benutzer Rust installiert hat; der enthaltene Code war der WebAssembly-Code, nicht der Rust-Quellcode.

### Das npm-Paket im Web verwenden

Lassen Sie uns eine Website erstellen, die unser neues npm-Paket verwendet. Viele Menschen verwenden npm-Pakete über verschiedene Bundler-Tools, und wir werden eines davon, `webpack`, in diesem Tutorial verwenden. Es ist nur ein bisschen komplex und zeigt einen realistischen Anwendungsfall.

Erstellen Sie ein neues Verzeichnis innerhalb des `hello-wasm`-Verzeichnisses namens `site`, um es auszuprobieren.
Wir haben das Paket noch nicht im npm-Registrierungsverzeichnis veröffentlicht, also können wir es aus einer lokalen Version installieren, indem wir `npm i /path/to/package` verwenden.
Sie können [`npm link`](https://docs.npmjs.com/cli/v10/commands/npm-link/) verwenden, aber die Installation von einem lokalen Pfad ist bequem für dieses Demo:

```bash
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die `webpack`-Entwicklungs-Abhängigkeiten:

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@5 copy-webpack-plugin@12
```

Als nächstes müssen wir webpack konfigurieren. Erstellen Sie `webpack.config.js` und fügen Sie Folgendes ein:

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

In Ihrer `package.json`, können Sie `build`- und `serve`-Skripte hinzufügen, die webpack mit der Konfigurationsdatei ausführen, die wir gerade erstellt haben:

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

Erstellen Sie schließlich eine Datei namens `index.js` und geben Sie ihr diesen Inhalt:

```js
import * as wasm from "hello-wasm";

wasm.greet("WebAssembly with npm");
```

Diese importiert das Modul aus dem `node_modules`-Ordner und ruft die `greet`-Funktion auf, wobei es `"WebAssembly with npm"` als Zeichenkette übergibt. Beachten Sie, dass hier nichts Besonderes ist, und doch rufen wir in Rust-Code auf. Soweit der JavaScript-Code sagen kann, handelt es sich nur um ein normales Modul.

Zuletzt müssen wir eine HTML-Datei hinzufügen, um das JavaScript zu laden. Erstellen Sie eine `index.html`-Datei und fügen Sie Folgendes hinzu:

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

Wir sind fertig mit dem Erstellen der Dateien. Lassen Sie uns das ausprobieren:

```bash
npm run serve
```

Dies startet einen Webserver und öffnet `http://localhost:8080`. Sie sollten ein Warnfeld auf dem Bildschirm sehen, das den Text `Hello, WebAssembly with npm!` enthält. Wir haben das Rust-Modul erfolgreich mit npm verwendet!

Wenn Sie Ihr WebAssembly außerhalb der lokalen Entwicklung verwenden möchten, können Sie das Paket mit den Befehlen `pack` und `publish` in Ihrem `hello-wasm`-Verzeichnis veröffentlichen:

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

Dies ist das Ende unseres Tutorials; wir hoffen, dass Sie es nützlich gefunden haben.

Es gibt viele spannende Arbeiten in diesem Bereich; wenn Sie daran mitwirken möchten, es noch besser zu machen, schauen Sie in die [Rust and WebAssembly Working Group](https://github.com/rustwasm/team/blob/master/README.md#get-involved).
