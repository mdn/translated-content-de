---
title: Kompilierung von Rust zu WebAssembly
slug: WebAssembly/Guides/Rust_to_Wasm
l10n:
  sourceCommit: df9d06402163f77fc3e2d327ab63f9dd4af15b38
---

Wenn Sie etwas Rust-Code haben, können Sie ihn in [WebAssembly](/de/docs/WebAssembly) (Wasm) kompilieren. Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt in WebAssembly kompilieren und es in einer bestehenden Webanwendung verwenden können.

## Anwendungsfälle für Rust und WebAssembly

Es gibt zwei Hauptanwendungsfälle für Rust und WebAssembly:

- Eine komplette Anwendung erstellen — eine gesamte Webanwendung, die in Rust basiert.
- Einen Teil einer Anwendung erstellen — Rust in einem bestehenden JavaScript-Frontend verwenden.

Derzeit konzentriert sich das Rust-Team auf den zweiten Fall, und genau darauf gehen wir hier ein. Für den ersten Fall schauen Sie sich Projekte wie [`yew`](https://github.com/yewstack/yew) und [leptos](https://github.com/leptos-rs/leptos) an.

In diesem Tutorial erstellen wir ein Paket mit `wasm-pack`, einem Werkzeug zum Erstellen von JavaScript-Paketen in Rust. Dieses Paket wird nur WebAssembly- und JavaScript-Code enthalten, sodass Benutzer Rust nicht installiert haben müssen. Sie merken möglicherweise nicht einmal, dass es in Rust geschrieben ist.

## Rust-Umgebung einrichten

Wir beginnen mit dem Einrichten der notwendigen Umgebung.

### Rust installieren

Installieren Sie Rust, indem Sie die Seite [Install Rust](https://www.rust-lang.org/tools/install) aufrufen und den Anweisungen folgen. Dadurch wird ein Tool namens "rustup" installiert, mit dem Sie mehrere Versionen von Rust verwalten können. Standardmäßig wird die neueste stabile Rust-Version installiert, die Sie für die allgemeine Rust-Entwicklung verwenden können. Rustup installiert `rustc`, den Rust-Compiler, `cargo`, Rusts Paketmanager, `rust-std`, Rusts Standardbibliotheken, und einige hilfreiche Dokumentationen — `rust-docs`.

> [!NOTE]
> Achten Sie auf die Nachricht nach der Installation über das Erfordernis, das `bin`-Verzeichnis von Cargo in Ihrem System-`PATH` zu haben. Dies wird automatisch hinzugefügt, aber Sie müssen Ihr Terminal neu starten, damit es wirksam wird.

### wasm-pack

Um das Paket zu erstellen, benötigen wir ein zusätzliches Werkzeug, `wasm-pack`. Dies hilft beim Kompilieren des Codes zu WebAssembly und produziert die richtige Verpackung für die Verwendung im Browser. Um es herunterzuladen und zu installieren, geben Sie den folgenden Befehl in Ihr Terminal ein:

```bash
cargo install wasm-pack
```

## Unser WebAssembly-Paket erstellen

Genug der Einrichtung; erstellen wir ein neues Paket in Rust. Navigieren Sie zu dem Verzeichnis, in dem Sie Ihre Projekte speichern, und geben Sie Folgendes ein:

```bash
cargo new --lib hello-wasm
```

Dies erstellt eine neue Bibliothek in einem Unterverzeichnis namens `hello-wasm` mit allem, was Sie zum Loslegen benötigen:

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

`Cargo.toml` ist die Datei, die unsere Erstellung konfiguriert. Sie funktioniert ähnlich wie `Gemfile` von Bundler oder `package.json` von npm.

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

Unser Rust-Code hat drei Hauptteile; lassen Sie uns über jeden einzeln sprechen. Wir geben hier eine allgemeine Erklärung, und überfliegen einige Details; um mehr über Rust zu erfahren, lesen Sie bitte das kostenlose Online-Buch [The Rust Programming Language](https://doc.rust-lang.org/book/).

#### Verwendung von `wasm-bindgen` zur Kommunikation zwischen Rust und JavaScript

Der erste Teil sieht so aus:

```rust
use wasm_bindgen::prelude::*;
```

Bibliotheken werden in Rust "Crates" genannt.

Verstanden? _Cargo_ verschifft _Crates_.

Die erste Zeile enthält einen `use`-Befehl, der Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles im `wasm_bindgen::prelude`-Modul. Diese Funktionen verwenden wir im nächsten Abschnitt.

Bevor wir zum nächsten Abschnitt übergehen, sollten wir mehr über `wasm-bindgen` sprechen.

`wasm-pack` verwendet `wasm-bindgen`, ein weiteres Tool, um eine Brücke zwischen den Typen von JavaScript und Rust bereitzustellen. Es ermöglicht JavaScript, eine Rust-API mit einem String aufzurufen, oder eine Rust-Funktion, eine JavaScript-Ausnahme abzufangen.

Wir verwenden `wasm-bindgen`'s Funktionalität in unserem Paket. Tatsächlich ist das der nächste Abschnitt.

#### Externe Funktionen in JavaScript von Rust aus aufrufen

Der nächste Teil sieht so aus:

```rust
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}
```

Der Teil innerhalb der `#[ ]` wird als "Attribut" bezeichnet und modifiziert die nächste Anweisung in irgendeiner Weise. In diesem Fall, ist diese Anweisung ein `extern`, welches Rust sagt, dass wir einige extern definierte Funktionen aufrufen möchten. Das Attribut sagt "wasm-bindgen weiß, wie man diese Funktionen findet".

Die dritte Zeile ist eine Funktionssignatur, geschrieben in Rust. Sie sagt "die `alert`-Funktion benötigt ein Argument, einen String namens `s`."

Wie Sie vermuten könnten, ist dies die [`alert`-Funktion, die von JavaScript bereitgestellt wird](/de/docs/Web/API/Window/alert). Wir rufen diese Funktion im nächsten Abschnitt auf.

Immer wenn Sie JavaScript-Funktionen aufrufen möchten, können Sie sie zu dieser Datei hinzufügen, und `wasm-bindgen` richtet alles für Sie ein. Noch nicht alles wird unterstützt, aber wir arbeiten daran. Bitte [melden Sie Fehler](https://github.com/rustwasm/wasm-bindgen/issues/new), wenn etwas fehlt.

#### Rust-Funktionen produzieren, die von JavaScript aufgerufen werden können

Der letzte Teil ist dieser:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Wieder einmal sehen wir das `#[wasm_bindgen]`-Attribut. In diesem Fall modifiziert es keinen `extern`-Block, sondern ein `fn`; das bedeutet, dass wir wollen, dass diese Rust-Funktion von JavaScript aufgerufen werden kann. Es ist das Gegenteil von `extern`: dies sind nicht die Funktionen, die wir benötigen, sondern die Funktionen, die wir in die Welt hinausgeben.

Diese Funktion heißt `greet` und benötigt ein Argument, einen String (geschrieben `&str`), `name`. Sie ruft dann die `alert`-Funktion auf, die wir im obigen `extern`-Block angefordert haben. Sie übergibt einen Aufruf des `format!`-Macros, der es uns ermöglicht, Strings zu verketten.

Das `format!`-Macro benötigt in diesem Fall zwei Argumente: einen Format-String und eine Variable, die darin eingesetzt wird. Der Format-String ist der `"Hello, {}!"`-Teil. Er enthält `{}`s, wo Variablen interpoliert werden. Die Variable, die wir übergeben, ist `name`, das Argument der Funktion, also wenn wir `greet("Steve")` aufrufen, sollten wir `"Hello, Steve!"` sehen.

Dies wird an `alert()` übergeben, sodass beim Aufrufen dieser Funktion ein Alert-Fenster mit "Hello, Steve!" angezeigt wird.

Jetzt, da unsere Bibliothek geschrieben ist, lass uns sie kompilieren.

### Unsere Code zu WebAssembly kompilieren

Um unseren Code korrekt zu kompilieren, konfigurieren wir ihn zunächst mit `Cargo.toml`. Öffnen Sie diese Datei und ändern Sie den Inhalt, sodass er folgendermaßen aussieht:

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

Füllen Sie Ihr eigenes Repository aus und verwenden Sie dieselben Informationen, die `git` für das `authors`-Feld verwendet.

Der große Teil, den wir hinzufügen, ist `[package]`. Der `[lib]`-Teil sagt Rust, dass es eine `cdylib`-Version unseres Pakets erstellen soll; wir gehen in diesem Tutorial nicht darauf ein, was das bedeutet. Für mehr Informationen konsultieren Sie die [Cargo](https://doc.rust-lang.org/cargo/guide/) und [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html) Dokumentationen.

Der letzte Abschnitt ist der `[dependencies]`-Bereich. Hier sagen wir Cargo, welche Version von `wasm-bindgen` wir abhängen wollen; in diesem Fall ist das jede `0.2.z`-Version (aber nicht `0.3.0` oder höher).

### Das Paket erstellen

Jetzt, da wir die Einrichtung abgeschlossen haben, lassen Sie uns das Paket erstellen. Wir verwenden den generierten Code in einem nativen ES-Modul und Node.js. Zu diesem Zweck verwenden wir das [`--target` Argument](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) in `wasm-pack build`, um anzugeben, welche Art von WebAssembly und JavaScript generiert wird.

Führen Sie zunächst den folgenden Befehl in Ihrem `hello-wasm`-Verzeichnis aus:

```bash
wasm-pack build --target web
```

Dies erledigt mehrere Dinge. Um mehr darüber zu erfahren, lesen Sie [diesen Blogbeitrag auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). Kurz gesagt, `wasm-pack build`:

1. Kompiliert Ihren Rust-Code zu WebAssembly.
2. Führt `wasm-bindgen` auf diesem WebAssembly aus, um eine JavaScript-Datei zu generieren, die diese WebAssembly-Datei in ein Modul verpackt, das der Browser verstehen kann.
3. Erstellt ein `pkg`-Verzeichnis und verschiebt diese JavaScript-Datei und Ihren WebAssembly-Code hinein.
4. Liest Ihre `Cargo.toml` und produziert ein äquivalentes `package.json`.
5. Kopiert Ihre `README.md` (falls Sie eine haben) in das Paket.

Das Endergebnis? Sie haben ein Paket im `pkg`-Verzeichnis.

## Das Paket im Web verwenden

Nun, da wir ein kompiliertes Wasm-Modul haben, lassen Sie es uns im Browser ausführen. Erstellen Sie eine Datei namens `index.html` im Stammverzeichnis des Projekts, sodass wir die folgende Projektstruktur haben:

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

Das Skript in dieser Datei wird den JavaScript-Klebecode importieren, das Wasm-Modul initialisieren und die `greet`-Funktion aufrufen, die wir in Rust geschrieben haben.

Bedienen Sie das Projektverzeichnis mit einem lokalen Webserver (z. B. `python3 -m http.server`). Wenn Sie nicht wissen, wie das geht, lesen Sie [Einrichten eines einfachen lokalen HTTP-Servers](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

> [!NOTE]
> Verwenden Sie einen aktuellen Webserver, der den `application/wasm` MIME-Typ unterstützt. Ältere Webserver unterstützen dies möglicherweise noch nicht.

Laden Sie `index.html` vom Webserver (wenn Sie das Python3-Beispiel verwendet haben: `http://localhost:8000`). Ein Alert-Fenster mit dem Text `Hello, WebAssembly!` erscheint auf dem Bildschirm. Wir haben erfolgreich von JavaScript in Rust und von Rust in JavaScript aufgerufen.

## Unser Paket für npm verfügbar machen

Wir erstellen ein npm-Paket, daher müssen Sie Node.js und npm installiert haben.

Um Node.js und npm zu erhalten, gehen Sie zur [Get npm!](https://docs.npmjs.com/getting-started/) Seite und folgen Sie den Anweisungen. Dieses Tutorial zielt auf Node 20 ab. Um zwischen Node-Versionen zu wechseln, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Um das WebAssembly-Modul mit npm zu verwenden, müssen wir einige Änderungen vornehmen. Lassen Sie uns beginnen, indem wir unser Rust mit der `bundler`-Option als Ziel neu kompilieren:

```bash
wasm-pack build --target bundler
```

Wir haben jetzt ein npm-Paket, das in Rust geschrieben, aber in WebAssembly kompiliert wurde. Es ist bereit für die Nutzung durch JavaScript und erfordert nicht, dass der Benutzer Rust installiert hat; der enthaltene Code war der WebAssembly-Code, nicht der Rust-Quelltext.

### Das npm-Paket im Web verwenden

Lassen Sie uns eine Website erstellen, die unser neues npm-Paket verwendet. Viele Leute verwenden npm-Pakete über verschiedene Bundler-Tools, und wir verwenden eines davon, `webpack`, in diesem Tutorial. Es ist nur ein wenig komplex und zeigt einen realistischen Anwendungsfall.

Erstellen Sie ein neues Verzeichnis im `hello-wasm`-Verzeichnis namens `site`, um es auszuprobieren. Wir haben das Paket noch nicht im npm-Registry veröffentlicht, sodass wir es von einer lokalen Version mit `npm i /path/to/package` installieren können. Sie können [`npm link`](https://docs.npmjs.com/cli/v10/commands/npm-link/) verwenden, aber die Installation von einem lokalen Pfad ist bequem für diese Demo:

```bash
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die `webpack` Dev-Abhängigkeiten:

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

In Ihrem `package.json` können Sie `build` und `serve`-Skripte hinzufügen, die webpack mit der Konfigurationsdatei ausführen, die wir gerade erstellt haben:

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

Erstellen Sie als nächstes eine Datei namens `index.js`, und geben Sie ihr diesen Inhalt:

```js
import * as wasm from "hello-wasm";

wasm.greet("WebAssembly with npm");
```

Dies importiert das Modul aus dem `node_modules`-Ordner und ruft die `greet`-Funktion auf, indem es `"WebAssembly with npm"` als String übergibt. Beachten Sie, dass hier nichts Besonderes ist, obwohl wir in Rust-Code aufrufen. So weit das JavaScript-Code befassen kann, handelt es sich um ein normales Modul.

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

Wir sind fertig mit der Erstellung der Dateien. Versuchen wir es:

```bash
npm run serve
```

Dies startet einen Webserver und öffnet `http://localhost:8080`. Sie sollten ein Alert-Fenster auf dem Bildschirm sehen, das den Text `Hello, WebAssembly with npm!` enthält. Wir haben das Rust-Modul erfolgreich mit npm verwendet!

Wenn Sie möchten, können Sie Ihr WebAssembly außerhalb der lokalen Entwicklung verwenden, indem Sie das Paket mit den Befehlen `pack` und `publish` im `hello-wasm`-Verzeichnis veröffentlichen:

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

Um bei npm zu veröffentlichen, benötigen Sie ein [npm Konto](https://www.npmjs.com/) und autorisieren Ihre Maschine mit [`npm adduser`](https://docs.npmjs.com/cli/v10/commands/npm-adduser/). Wenn Sie bereit sind, können Sie mit `wasm-pack` veröffentlichen, das `npm publish` im Hintergrund aufruft:

```bash
wasm-pack publish
```

## Fazit

Dies ist das Ende unseres Tutorials; wir hoffen, dass Sie es nützlich fanden.

Es gibt viele aufregende Arbeiten in diesem Bereich; wenn Sie helfen möchten, es noch besser zu machen, schauen Sie sich die [Rust und WebAssembly Arbeitsgruppe](https://github.com/rustwasm/team/blob/master/README.md#get-involved) an.
