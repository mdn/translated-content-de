---
title: Kompilieren von Rust zu WebAssembly
slug: WebAssembly/Rust_to_Wasm
l10n:
  sourceCommit: 452b76a8f715dcf1aa6d59e6c2795e3eddcd0ae6
---

{{WebAssemblySidebar}}

Wenn Sie über Rust-Code verfügen, können Sie ihn in [WebAssembly](/de/docs/WebAssembly) (Wasm) kompilieren. Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt in WebAssembly kompilieren und es in einer bestehenden Webanwendung verwenden können.

## Anwendungsfälle für Rust und WebAssembly

Es gibt zwei Hauptanwendungsfälle für Rust und WebAssembly:

- Eine komplette Anwendung erstellen – eine ganze Web-App, die in Rust basiert.
- Einen Teil einer Anwendung erstellen – Rust in einem bestehenden JavaScript-Frontend verwenden.

Derzeit konzentriert sich das Rust-Team auf den letzteren Fall, und genau darauf gehen wir hier ein. Für den ersten Fall sollten Sie Projekte wie [`yew`](https://github.com/yewstack/yew) und [leptos](https://github.com/leptos-rs/leptos) in Betracht ziehen.

In diesem Tutorial erstellen wir ein Paket mit `wasm-pack`, einem Tool zum Erstellen von JavaScript-Paketen in Rust. Dieses Paket wird nur WebAssembly- und JavaScript-Code enthalten, sodass die Benutzer Rust nicht installiert haben müssen. Möglicherweise bemerken sie nicht einmal, dass es in Rust geschrieben ist.

## Einrichtung der Rust-Umgebung

Wir beginnen mit der Einrichtung der erforderlichen Umgebung.

### Rust installieren

Installieren Sie Rust, indem Sie die Seite [Rust installieren](https://www.rust-lang.org/tools/install) besuchen und die Anweisungen befolgen. Dadurch wird ein Tool namens "rustup" installiert, mit dem Sie mehrere Versionen von Rust verwalten können. In der Standardkonfiguration wird die neueste stabile Rust-Version installiert, die Sie für die allgemeine Rust-Entwicklung verwenden können. Rustup installiert `rustc`, den Rust-Compiler, `cargo`, Rust's Paketmanager, `rust-std`, Rusts Standardbibliotheken, und einige hilfreiche Dokumentationen – `rust-docs`.

> [!NOTE]
> Achten Sie auf die Hinweis nach der Installation, dass das `bin`-Verzeichnis von cargo in Ihrem System-`PATH` sein muss. Dies wird automatisch hinzugefügt, aber Sie müssen Ihr Terminal neu starten, damit es wirksam wird.

### wasm-pack

Um das Paket zu erstellen, benötigen wir ein zusätzliches Tool, `wasm-pack`. Dieses hilft dabei, den Code in WebAssembly zu kompilieren und die richtige Verpackung zur Nutzung im Browser bereitzustellen. Um es herunterzuladen und zu installieren, geben Sie den folgenden Befehl in Ihr Terminal ein:

```bash
cargo install wasm-pack
```

## Erstellen unseres WebAssembly-Pakets

Genug der Einrichtung; lassen Sie uns ein neues Paket in Rust erstellen. Navigieren Sie zu dem Ort, an dem Sie Ihre Projekte aufbewahren, und geben Sie Folgendes ein:

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

### Schreiben wir etwas Rust

Wir werden den generierten Code in `src/lib.rs` nicht verwenden; ersetzen Sie ihn durch den folgenden:

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

Unser Rust-Code verfügt über drei Hauptbestandteile; Lassen Sie uns jeden davon der Reihe nach besprechen. Wir geben hier eine allgemeine Erklärung und übergehen einige Details; um mehr über Rust zu erfahren, schauen Sie sich bitte das kostenlose Online-Buch [The Rust Programming Language](https://doc.rust-lang.org/book/) an.

#### Verwendung von `wasm-bindgen` zur Kommunikation zwischen Rust und JavaScript

Der erste Teil sieht so aus:

```rust
use wasm_bindgen::prelude::*;
```

Bibliotheken werden in Rust "Crates" genannt.

Verstehen Sie? _Cargo_ versendet _Crates_.

Die erste Zeile enthält einen `use`-Befehl, der Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles im Modul `wasm_bindgen::prelude`. Wir verwenden diese Funktionen im nächsten Abschnitt.

Bevor wir zum nächsten Abschnitt übergehen, sollten wir mehr über `wasm-bindgen` sprechen.

`wasm-pack` verwendet `wasm-bindgen`, ein weiteres Tool, um eine Brücke zwischen den Datentypen von JavaScript und Rust bereitzustellen. Es ermöglicht JavaScript, eine Rust-API mit einem String aufzurufen oder eine Rust-Funktion dazu zu bringen, eine JavaScript-Ausnahme abzufangen.

Wir verwenden die Funktionalität von `wasm-bindgen` in unserem Paket. Tatsächlich handelt es sich um den nächsten Abschnitt.

#### Aufrufen externer Funktionen in JavaScript von Rust aus

Der nächste Teil sieht so aus:

```rust
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}
```

Das, was in dem `#[ ]` steht, wird als "Attribut" bezeichnet, und es modifiziert die nächste Anweisung auf irgendeine Weise. In diesem Fall ist diese Anweisung ein `extern`, der Rust mitteilt, dass wir einige extern definierte Funktionen aufrufen möchten. Das Attribut sagt "wasm-bindgen weiß, wie man diese Funktionen findet".

Die dritte Zeile ist eine Funktionssignatur, geschrieben in Rust. Sie besagt: "Die `alert`-Funktion nimmt ein Argument, einen String `s`, entgegen."

Wie Sie vielleicht vermuten, handelt es sich hierbei um [die `alert`-Funktion, die von JavaScript bereitgestellt wird](/de/docs/Web/API/Window/alert). Wir rufen diese Funktion im nächsten Abschnitt auf.

Wann immer Sie JavaScript-Funktionen aufrufen möchten, können Sie sie in diese Datei aufnehmen, und `wasm-bindgen` richtet alles für Sie ein. Noch nicht alles wird unterstützt, aber wir arbeiten daran. Bitte [melden Sie Fehler](https://github.com/rustwasm/wasm-bindgen/issues/new), wenn etwas fehlt.

#### Erstellen von Rust-Funktionen, die von JavaScript aufgerufen werden können

Der letzte Teil ist dieser hier:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Wieder einmal sehen wir das Attribut `#[wasm_bindgen]`. In diesem Fall modifiziert es nicht einen `extern`-Block, sondern eine `fn`; dies bedeutet, dass wir möchten, dass diese Rust-Funktion von JavaScript aufgerufen werden kann. Es ist das Gegenteil von `extern`: dies sind nicht die Funktionen, die wir benötigen, sondern die Funktionen, die wir der Welt zur Verfügung stellen.

Diese Funktion trägt den Namen `greet` und nimmt ein Argument, einen String (geschrieben als `&str`), `name`. Sie ruft dann die `alert`-Funktion auf, die wir im oben genannten `extern`-Block angefordert haben. Es übergibt einen Aufruf an das `format!`-Makro, das uns erlaubt, Strings zu verbinden.

Das `format!`-Makro nimmt in diesem Fall zwei Argumente: einen Format-String und eine Variable, die darin platziert werden soll. Der Format-String ist der Teil `"Hello, {}!"`. Er enthält `{}`s, wo Variablen interpoliert werden. Die Variable, die wir übergeben, ist `name`, das Argument der Funktion, sodass wir, wenn wir `greet("Steve")` aufrufen, `"Hello, Steve!"` sehen sollten.

Dies wird an `alert()` übergeben, sodass beim Aufruf dieser Funktion ein Alert-Fenster mit "Hello, Steve!" auf dem Bildschirm erscheint.

Da unsere Bibliothek jetzt geschrieben ist, lassen Sie uns sie kompilieren.

### Unseren Code zu WebAssembly kompilieren

Um unseren Code korrekt zu kompilieren, konfigurieren wir ihn zuerst mit `Cargo.toml`. Öffnen Sie diese Datei und ändern Sie ihren Inhalt, so dass sie so aussieht:

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

Fügen Sie Ihr eigenes Repository hinzu und verwenden Sie die gleichen Informationen, die `git` für das Feld `authors` verwendet.

Der große Teil, der hinzugefügt werden muss, ist `[package]`. Der `[lib]`-Teil teilt Rust mit, eine `cdylib`-Version unseres Pakets zu erstellen; wir werden in diesem Tutorial nicht darauf eingehen, was das bedeutet. Weitere Informationen dazu finden Sie in der [Cargo](https://doc.rust-lang.org/cargo/guide/)- und [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html)-Dokumentation.

Der letzte Abschnitt ist der `[[dependencies]]`-Abschnitt. Hier teilen wir Cargo mit, welche Version von `wasm-bindgen` wir benötigen; in diesem Fall ist es jede `0.2.z`-Version (aber nicht `0.3.0` oder höher).

### Das Paket erstellen

Jetzt, da die Einrichtung abgeschlossen ist, bauen wir das Paket.
Wir werden den generierten Code in einem nativen ES-Modul und Node.js verwenden.
Zu diesem Zweck verwenden wir das [`--target` Argument](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) in `wasm-pack build`, um festzulegen, welche Art von WebAssembly und JavaScript generiert wird.

Führen Sie zunächst den folgenden Befehl im Verzeichnis `hello-wasm` aus:

```bash
wasm-pack build --target web
```

Dies tut mehrere Dinge. Um sie im Detail zu lernen, werfen Sie einen Blick auf [diesen Blog-Post auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). Kurz gesagt, `wasm-pack build`:

1. Kompiliert Ihren Rust-Code zu WebAssembly.
2. Führt `wasm-bindgen` auf diesem WebAssembly aus und generiert eine JavaScript-Datei, die dieses WebAssembly in ein Modul einbindet, das der Browser verstehen kann.
3. Erstellt ein `pkg`-Verzeichnis und verschiebt diese JavaScript-Datei sowie Ihren WebAssembly-Code hinein.
4. Liest Ihre `Cargo.toml` und erstellt ein äquivalentes `package.json`.
5. Kopiert Ihr `README.md` (falls vorhanden) in das Paket.

Das Endergebnis? Sie haben ein Paket im `pkg`-Verzeichnis.

## Das Paket im Web verwenden

Jetzt, da wir ein kompiliertes Wasm-Modul haben, lassen Sie es uns im Browser ausführen.
Lassen Sie uns beginnen, indem wir eine Datei namens `index.html` im Stammverzeichnis des Projekts erstellen, sodass wir die folgende Projektstruktur haben:

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

Fügen Sie den folgenden Inhalt in die `index.html`-Datei ein:

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

Stellen Sie den Projektstamm mit einem lokalen Webserver bereit (z. B. `python3 -m http.server`). Wenn Sie sich nicht sicher sind, wie das geht, beziehen Sie sich auf [Einfachen lokalen HTTP-Server einrichten](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

> [!NOTE]
> Verwenden Sie einen aktuellen Webserver, der den `application/wasm` MIME-Typ unterstützt. Ältere Webserver unterstützen diesen möglicherweise noch nicht.

Laden Sie `index.html` vom Webserver (wenn Sie das Python3-Beispiel verwendet haben: `http://localhost:8000`). Ein Meldungsfeld erscheint auf dem Bildschirm mit dem Text `Hello, WebAssembly!`. Wir haben erfolgreich vom JavaScript in Rust und von Rust in JavaScript gerufen.

## Unser Paket für npm verfügbar machen

Da wir ein npm-Paket erstellen, müssen Sie Node.js und npm installiert haben.

Um Node.js und npm zu erhalten, gehen Sie zur Seite [npm besorgen!](https://docs.npmjs.com/getting-started/) und folgen Sie den Anweisungen.
Dieses Tutorial zielt auf Node 20 ab. Um zwischen Node-Versionen zu wechseln, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Um das WebAssembly-Modul mit npm zu verwenden, müssen wir einige Änderungen vornehmen.
Lassen Sie uns beginnen, indem wir unser Rust mit der `bundler`-Option als Ziel neu kompilieren:

```bash
wasm-pack build --target bundler
```

Wir haben jetzt ein npm-Paket, das in Rust geschrieben, aber in WebAssembly kompiliert wurde. Es ist bereit zur Nutzung von JavaScript aus und erfordert nicht, dass der Benutzer Rust installiert hat; der enthaltene Code war der WebAssembly-Code, nicht der Rust-Quellcode.

### Das npm-Paket im Web verwenden

Erstellen wir eine Website, die unser neues npm-Paket verwendet. Viele Menschen verwenden npm-Pakete über verschiedene Bundler-Tools, und wir werden eines davon, nämlich `webpack`, in diesem Tutorial verwenden. Es ist nur ein bisschen kompliziert und zeigt einen realistischen Anwendungsfall.

Erstellen Sie ein neues Verzeichnis im `hello-wasm`-Verzeichnis namens `site`, um es auszuprobieren.
Wir haben das Paket noch nicht im npm-Registry veröffentlicht, daher können wir es aus einer lokalen Version installieren, indem wir `npm i /path/to/package` verwenden.
Sie können [`npm link`](https://docs.npmjs.com/cli/v10/commands/npm-link/) verwenden, aber die Installation von einem lokalen Pfad ist für diese Demo praktisch:

```bash
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die `webpack`-Entwicklungsabhängigkeiten:

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@5 copy-webpack-plugin@12
```

Als nächstes müssen wir webpack konfigurieren. Erstellen Sie `webpack.config.js` und fügen Sie Folgendes hinzu:

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

In Ihrer `package.json` können Sie `build`- und `serve`-Skripte hinzufügen, die webpack mit der gerade erstellten Konfigurationsdatei ausführen:

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

Erstellen Sie als nächstes eine Datei namens `index.js` und geben Sie ihr folgenden Inhalt:

```js
import * as wasm from "hello-wasm";

wasm.greet("WebAssembly with npm");
```

Dies importiert das Modul aus dem `node_modules`-Ordner und ruft die `greet`-Funktion auf, wobei `"WebAssembly with npm"` als String übergeben wird. Beachten Sie, wie hier nichts Besonderes vorliegt, und doch rufen wir Rust-Code auf. Aus Sicht des JavaScript-Codes handelt es sich einfach um ein normales Modul.

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

Das Verzeichnis `hello-wasm/site` sollte wie folgt aussehen:

```plain
├── node_modules
├── index.html
├── index.js
├── package-lock.json
├── package.json
└── webpack.config.js
```

Wir sind fertig mit dem Erstellen der Dateien. Probieren wir es aus:

```bash
npm run serve
```

Dies startet einen Webserver und öffnet `http://localhost:8080`. Sie sollten ein Meldungsfeld auf dem Bildschirm sehen, das den Text `Hello, WebAssembly with npm!` enthält. Wir haben erfolgreich das Rust-Modul mit npm verwendet!

Wenn Sie Ihr WebAssembly außerhalb der lokalen Entwicklung verwenden möchten, können Sie das Paket mit den Befehlen `pack` und `publish` im `hello-wasm`-Verzeichnis veröffentlichen:

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

## Fazit

Dies ist das Ende unseres Tutorials; wir hoffen, dass Sie es nützlich gefunden haben.

Es gibt viele spannende Entwicklungen in diesem Bereich; wenn Sie helfen möchten, es noch besser zu machen, schauen Sie sich die [Rust and WebAssembly Working Group](https://github.com/rustwasm/team/blob/master/README.md#get-involved) an.
