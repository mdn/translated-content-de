---
title: Kompilieren von Rust zu WebAssembly
slug: WebAssembly/Guides/Rust_to_Wasm
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt in WebAssembly kompilieren und es in einer bestehenden Web-App verwenden.

## Anwendungsfälle von Rust und WebAssembly

Es gibt zwei Hauptanwendungsfälle für Rust und WebAssembly:

- Eine gesamte Anwendung erstellen — eine komplette Web-App basierend auf Rust.
- Ein Teil einer Anwendung erstellen — Rust in einem bestehenden JavaScript-Frontend verwenden.

Im Moment konzentriert sich das Rust-Team auf den zweiten Fall, und genau das behandeln wir hier. Für den ersten Fall sehen Sie sich Projekte wie [`yew`](https://github.com/yewstack/yew) und [leptos](https://github.com/leptos-rs/leptos) an.

In diesem Tutorial erstellen wir ein Paket mit `wasm-pack`, einem Tool zum Erstellen von JavaScript-Paketen in Rust. Dieses Paket wird nur WebAssembly- und JavaScript-Code enthalten, sodass Benutzer Rust nicht installiert haben müssen. Sie merken möglicherweise nicht einmal, dass es in Rust geschrieben ist.

## Einrichten der Rust-Umgebung

Wir beginnen mit der Einrichtung der notwendigen Umgebung.

### Rust installieren

Installieren Sie Rust, indem Sie die Seite [Install Rust](https://rust-lang.org/tools/install/) aufrufen und den Anweisungen folgen. Dadurch wird ein Tool namens "rustup" installiert, mit dem Sie mehrere Versionen von Rust verwalten können. Standardmäßig wird die neueste stabile Rust-Version installiert, die Sie für die allgemeine Rust-Entwicklung verwenden können. Rustup installiert `rustc`, den Rust-Compiler, `cargo`, Rusts Paketmanager, `rust-std`, Rusts Standardbibliotheken und einige hilfreiche Dokumentationen — `rust-docs`.

> [!NOTE]
> Achten Sie auf den Hinweis nach der Installation über die Notwendigkeit, das `bin`-Verzeichnis von cargo in Ihrem System-`PATH` zu haben. Dies wird automatisch hinzugefügt, aber Sie müssen Ihr Terminal neu starten, damit es wirksam wird.

### wasm-pack

Zum Erstellen des Pakets benötigen wir ein zusätzliches Tool, `wasm-pack`. Es hilft, den Code in WebAssembly zu kompilieren und die richtige Verpackung für die Verwendung im Browser zu erstellen. Um es herunterzuladen und zu installieren, geben Sie den folgenden Befehl in Ihr Terminal ein:

```bash
cargo install wasm-pack
```

## Erstellen unseres WebAssembly-Pakets

Genug der Einrichtung; lassen Sie uns ein neues Paket in Rust erstellen. Navigieren Sie zu dem Ordner, in dem Sie Ihre Projekte aufbewahren, und geben Sie Folgendes ein:

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

Unser Rust-Code besteht aus drei Hauptteilen; lassen Sie uns jeden einzeln besprechen. Wir geben hier eine Erklärung auf hoher Ebene und überspringen einige Details; um mehr über Rust zu erfahren, lesen Sie bitte das kostenlose Online-Buch [The Rust Programming Language](https://doc.rust-lang.org/book/).

#### Kommunikation zwischen Rust und JavaScript mit `wasm-bindgen`

Der erste Teil sieht so aus:

```rust
use wasm_bindgen::prelude::*;
```

Bibliotheken werden in Rust "Crates" genannt.

Verstanden? _Cargo_ verschifft _Crates_.

Die erste Zeile enthält einen `use`-Befehl, der Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles im Modul `wasm_bindgen::prelude`. Wir verwenden diese Funktionen im nächsten Abschnitt.

Bevor wir zum nächsten Abschnitt übergehen, sollten wir mehr über `wasm-bindgen` sprechen.

`wasm-pack` verwendet `wasm-bindgen`, ein weiteres Tool, um eine Brücke zwischen den Typen von JavaScript und Rust bereitzustellen. Es ermöglicht JavaScript, eine Rust-API mit einem String aufzurufen, oder einer Rust-Funktion, eine JavaScript-Ausnahme abzufangen.

Wir nutzen `wasm-bindgen`'s Funktionalität in unserem Paket. In der Tat ist das der nächste Abschnitt.

#### Externe Funktionen in JavaScript von Rust aus aufrufen

Der nächste Teil sieht so aus:

```rust
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}
```

Der Abschnitt innerhalb von `#[ ]` wird als "Attribut" bezeichnet, und er modifiziert die nächste Anweisung in irgendeiner Weise. In diesem Fall ist die Anweisung ein `extern`, was Rust mitteilt, dass wir einige extern definierte Funktionen aufrufen möchten. Das Attribut sagt, "wasm-bindgen weiß, wie man diese Funktionen findet."

Die dritte Zeile ist eine Funktionssignatur, die in Rust geschrieben ist. Sie sagt, dass die `alert`-Funktion ein Argument erhält, einen String mit dem Namen `s`.

Wie Sie vielleicht vermuten, handelt es sich um [die `alert`-Funktion, die von JavaScript bereitgestellt wird](/de/docs/Web/API/Window/alert). Wir rufen diese Funktion im nächsten Abschnitt auf.

Wann immer Sie JavaScript-Funktionen aufrufen möchten, können Sie sie zu dieser Datei hinzufügen, und `wasm-bindgen` richtet alles für Sie ein. Noch wird nicht alles unterstützt, aber wir arbeiten daran. Bitte [melden Sie Fehler](https://github.com/rustwasm/wasm-bindgen/issues/new), wenn etwas fehlt.

#### Rust-Funktionen erstellen, die von JavaScript aufgerufen werden können

Der letzte Teil ist dieser hier:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Wieder einmal sehen wir das `#[wasm_bindgen]`-Attribut. In diesem Fall wird es nicht auf einen `extern`-Block angewendet, sondern auf ein `fn`-Symbol; das bedeutet, dass wir möchten, dass diese Rust-Funktion von JavaScript aufgerufen werden kann. Es ist das Gegenteil von `extern`: Das sind nicht die Funktionen, die wir brauchen, sondern die Funktionen, die wir der Welt zur Verfügung stellen.

Diese Funktion heißt `greet` und nimmt ein Argument, einen String (geschrieben `&str`), `name`. Sie ruft dann die `alert`-Funktion auf, die wir im `extern`-Block oben angefordert haben. Sie übergibt einen Aufruf an das `format!`-Makro, das es uns ermöglicht, Strings zu verketten.

Das `format!`-Makro nimmt in diesem Fall zwei Argumente: einen Format-String und eine Variable, die eingefügt werden soll. Der Format-String ist der Abschnitt `"Hello, {}!"`. Er enthält `{}`s, an denen Variablen interpoliert werden. Die Variable, die wir übergeben, ist `name`, das Argument der Funktion, also wenn wir `greet("Steve")` aufrufen, sollten wir `"Hello, Steve!"` sehen.

Dies wird an `alert()` übergeben, also wenn wir diese Funktion aufrufen, erscheint ein Alert-Fenster mit "Hello, Steve!" auf dem Bildschirm.

Jetzt, da unsere Bibliothek geschrieben ist, lassen Sie sie uns bauen.

### Unseren Code in WebAssembly kompilieren

Um unseren Code richtig zu kompilieren, konfigurieren wir ihn zuerst mit `Cargo.toml`. Öffnen Sie diese Datei und ändern Sie deren Inhalt folgendermaßen:

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

Fügen Sie Ihr eigenes Repository hinzu und verwenden Sie die gleichen Informationen, die `git` für das `authors`-Feld verwendet.

Der große Teil, der hinzugefügt werden muss, ist `[package]`. Der Teil `[lib]` sagt Rust, dass eine `cdylib`-Version unseres Pakets erstellt wird; darauf gehen wir in diesem Tutorial nicht näher ein. Weitere Informationen finden Sie in der [Cargo](https://doc.rust-lang.org/cargo/guide/) und [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html) Dokumentation.

Der letzte Abschnitt ist der Abschnitt `[dependencies]`. Hier sagen wir Cargo, welche Version von `wasm-bindgen` wir als Abhängigkeit verwenden möchten; in diesem Fall ist das jede `0.2.z` Version (aber nicht `0.3.0` oder höher).

### Das Paket bauen

Jetzt, da wir die Einrichtung abgeschlossen haben, bauen wir das Paket.
Wir werden den generierten Code in einem nativen ES-Modul und Node.js verwenden.
Zu diesem Zweck verwenden wir das [`--target` Argument](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) in `wasm-pack build`, um anzugeben, welche Art von WebAssembly und JavaScript generiert wird.

Führen Sie zunächst den folgenden Befehl in Ihrem `hello-wasm`-Verzeichnis aus:

```bash
wasm-pack build --target web
```

Dies tut mehrere Dinge. Um mehr darüber im Detail zu erfahren, lesen Sie [diesen Blogbeitrag auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). Kurz gesagt, `wasm-pack build`:

1. Kompiliert Ihren Rust-Code zu WebAssembly.
2. Führt `wasm-bindgen` auf diesem WebAssembly aus und generiert eine JavaScript-Datei, die diese WebAssembly-Datei in ein Modul einwickelt, das der Browser verstehen kann.
3. Erstellt ein `pkg`-Verzeichnis und verschiebt diese JavaScript-Datei und Ihren WebAssembly-Code hinein.
4. Liest Ihr `Cargo.toml` und erzeugt ein äquivalentes `package.json`.
5. Kopiert Ihr `README.md` (falls vorhanden) in das Paket.

Das Endergebnis? Sie haben ein Paket im Verzeichnis `pkg`.

## Das Paket im Web verwenden

Jetzt, da wir ein kompiliertes Wasm-Modul haben, lassen Sie es uns im Browser ausführen.
Erstellen Sie eine Datei mit dem Namen `index.html` im Stammverzeichnis des Projekts, damit wir mit der folgenden Projektstruktur enden:

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

Das Skript in dieser Datei importiert den JavaScript-Glue-Code, initialisiert das Wasm-Modul und ruft die `greet`-Funktion auf, die wir in Rust geschrieben haben.

Bedienen Sie das Projektverzeichnis mit einem lokalen Webserver (z. B. `python3 -m http.server`). Wenn Sie sich nicht sicher sind, wie das geht, lesen Sie [Running a simple local HTTP server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

> [!NOTE]
> Verwenden Sie einen aktuellen Webserver, der den MIME-Typ `application/wasm` unterstützt. Ältere Webserver unterstützen ihn möglicherweise noch nicht.

Laden Sie `index.html` vom Webserver (wenn Sie das Python3-Beispiel verwenden: `http://localhost:8000`). Ein Alert-Fenster erscheint auf dem Bildschirm mit dem Inhalt `Hello, WebAssembly!`. Wir haben erfolgreich von JavaScript nach Rust und von Rust nach JavaScript aufgerufen.

## Unser Paket für npm verfügbar machen

Wir erstellen ein npm-Paket, daher müssen Sie Node.js und npm installiert haben.

Um Node.js und npm zu erhalten, besuchen Sie die Seite [Get npm!](https://docs.npmjs.com/getting-started/) und folgen Sie den Anweisungen.
Dieses Tutorial zielt auf Node 20 ab. Um zwischen Node-Versionen zu wechseln, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Um das WebAssembly-Modul mit npm zu verwenden, müssen wir einige Änderungen vornehmen.
Beginnen wir damit, unser Rust mit der Option `bundler` als Ziel erneut zu kompilieren:

```bash
wasm-pack build --target bundler
```

Wir haben jetzt ein npm-Paket, das in Rust geschrieben, aber in WebAssembly kompiliert wurde. Es ist bereit zur Verwendung durch JavaScript und erfordert nicht, dass der Benutzer Rust installiert hat; der enthaltene Code war der WebAssembly-Code, nicht der Rust-Quellcode.

### Das npm-Paket im Web verwenden

Lassen Sie uns eine Website erstellen, die unser neues npm-Paket verwendet. Viele Leute verwenden npm-Pakete über verschiedene Bündelwerkzeuge, und wir werden eines davon, `webpack`, in diesem Tutorial verwenden. Es ist nur ein wenig komplex und zeigt einen realistischen Anwendungsfall.

Erstellen wir ein neues Verzeichnis innerhalb des `hello-wasm`-Verzeichnisses namens `site`, um es auszuprobieren.
Wir haben das Paket noch nicht im npm-Registry veröffentlicht, also können wir es von einer lokalen Version mit `npm i /path/to/package` installieren.
Sie können [`npm link`](https://docs.npmjs.com/cli/v10/commands/npm-link/) verwenden, aber die Installation von einem lokalen Pfad ist für diese Demo praktisch:

```bash
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die `webpack` Entwicklungsabhängigkeiten:

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@5 copy-webpack-plugin@12
```

Als nächstes müssen wir webpack konfigurieren. Erstellen Sie `webpack.config.js` und fügen Sie folgendes darin ein:

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

In Ihrem `package.json` können Sie `build`- und `serve`-Skripts hinzufügen, die webpack mit der Konfigurationsdatei ausführen, die wir gerade erstellt haben:

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

Erstellen Sie nun eine Datei namens `index.js` und geben Sie ihr diese Inhalte:

```js
import * as wasm from "hello-wasm";

wasm.greet("WebAssembly with npm");
```

Dies importiert das Modul aus dem `node_modules`-Ordner und ruft die `greet`-Funktion auf, wobei `"WebAssembly with npm"` als String übergeben wird. Beachten Sie, dass hier nichts Besonderes ist, und doch rufen wir Rust-Code auf. Soweit der JavaScript-Code erkennen kann, ist dies einfach ein normales Modul.

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

Wir sind mit der Erstellung der Dateien fertig. Versuchen wir es:

```bash
npm run serve
```

Dies startet einen Webserver und öffnet `http://localhost:8080`. Sie sollten ein Alert-Fenster auf dem Bildschirm sehen, das den Text `Hello, WebAssembly with npm!` enthält. Wir haben erfolgreich das Rust-Modul mit npm verwendet!

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
Wenn Sie bereit sind, können Sie mit `wasm-pack` veröffentlichen, das unter der Haube `npm publish` aufruft:

```bash
wasm-pack publish
```

## Fazit

Dies ist das Ende unseres Tutorials; wir hoffen, Sie fanden es nützlich.

Es gibt viele spannende Arbeiten in diesem Bereich; wenn Sie dazu beitragen möchten, es noch besser zu machen, schauen Sie sich die [Rust and WebAssembly Working Group](https://github.com/rustwasm/team/blob/master/README.md#get-involved) an.
