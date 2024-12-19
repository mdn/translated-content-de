---
title: Kompilieren von Rust zu WebAssembly
slug: WebAssembly/Rust_to_Wasm
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{WebAssemblySidebar}}

Wenn Sie etwas Rust-Code haben, können Sie ihn in [WebAssembly](/de/docs/WebAssembly) (Wasm) kompilieren. Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt in WebAssembly kompilieren und in einer bestehenden Webanwendung verwenden.

## Anwendungsfälle für Rust und WebAssembly

Es gibt zwei Hauptanwendungsfälle für Rust und WebAssembly:

- Eine komplette Anwendung erstellen — eine gesamte Webanwendung in Rust.
- Einen Teil einer Anwendung erstellen — Rust in einem bestehenden JavaScript-Frontend verwenden.

Im Moment konzentriert sich das Rust-Team auf den letzteren Fall, und das behandeln wir hier. Für den ersteren Fall schauen Sie sich Projekte wie [`yew`](https://github.com/yewstack/yew) und [leptos](https://github.com/leptos-rs/leptos) an.

In diesem Tutorial erstellen wir ein Paket mit `wasm-pack`, einem Werkzeug zum Erstellen von JavaScript-Paketen in Rust. Dieses Paket wird nur WebAssembly- und JavaScript-Code enthalten, sodass Benutzer Rust nicht installiert haben müssen. Sie bemerken möglicherweise nicht einmal, dass es in Rust geschrieben ist.

## Rust-Umgebung einrichten

Wir beginnen damit, die erforderliche Umgebung einzurichten.

### Rust installieren

Installieren Sie Rust, indem Sie die Seite [Install Rust](https://www.rust-lang.org/tools/install) besuchen und den Anweisungen folgen. Dadurch wird ein Tool namens "rustup" installiert, mit dem Sie mehrere Rust-Versionen verwalten können. Standardmäßig wird die neueste stabile Rust-Version installiert, die Sie für die allgemeine Rust-Entwicklung verwenden können. Rustup installiert `rustc`, den Rust-Compiler, `cargo`, Rusts Paketmanager, `rust-std`, Rusts Standardbibliotheken, und einige hilfreiche Dokumentationen — `rust-docs`.

> [!NOTE]
> Beachten Sie die Hinweismeldung nach der Installation über die Notwendigkeit, das `bin`-Verzeichnis von Cargo in Ihrem System-`PATH` hinzuzufügen. Dies wird automatisch hinzugefügt, allerdings müssen Sie Ihr Terminal neu starten, damit es wirksam wird.

### wasm-pack

Um das Paket zu erstellen, benötigen wir ein zusätzliches Tool, `wasm-pack`. Dieses hilft, den Code in WebAssembly zu kompilieren und die richtige Verpackung für den Einsatz im Browser zu erstellen. Um es herunterzuladen und zu installieren, geben Sie den folgenden Befehl in Ihr Terminal ein:

```bash
cargo install wasm-pack
```

## Unser WebAssembly-Paket erstellen

Genug der Einrichtung; lassen Sie uns ein neues Paket in Rust erstellen. Navigieren Sie zu dem Verzeichnis, in dem Sie Ihre Projekte aufbewahren, und geben Sie Folgendes ein:

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

Wir verwenden den generierten Code in `src/lib.rs` nicht; ersetzen Sie ihn durch Folgendes:

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

Unser Rust-Code hat drei Hauptkomponenten; gehen wir auf jede einzeln ein. Hier geben wir eine hochrangige Erklärung und lassen einige Details aus; um mehr über Rust zu lernen, lesen Sie bitte das kostenlose Online-Buch [The Rust Programming Language](https://doc.rust-lang.org/book/).

#### Verwenden von `wasm-bindgen`, um zwischen Rust und JavaScript zu kommunizieren

Der erste Teil sieht so aus:

```rust
use wasm_bindgen::prelude::*;
```

In Rust werden Bibliotheken "Crates" genannt.

Verstehen Sie? _Cargo_ liefert _Kisten_ (Crates).

Die erste Zeile enthält einen `use`-Befehl, der Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles aus dem `wasm_bindgen::prelude`-Modul. Wir verwenden diese Funktionen im nächsten Abschnitt.

Bevor wir zum nächsten Abschnitt übergehen, sollten wir mehr über `wasm-bindgen` sprechen.

`wasm-pack` verwendet `wasm-bindgen`, ein weiteres Tool, um eine Brücke zwischen den Typen von JavaScript und Rust zu bieten. Es ermöglicht JavaScript, eine Rust-API mit einem String aufzurufen, oder eine Rust-Funktion, eine JavaScript-Ausnahme abzufangen.

Wir nutzen die Funktionen von `wasm-bindgen` in unserem Paket. Tatsächlich ist das der nächste Abschnitt.

#### Aufrufen externer Funktionen in JavaScript aus Rust

Der nächste Teil sieht so aus:

```rust
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}
```

Das Stück innerhalb von `#[ ]` wird als "Attribut" bezeichnet, und es modifiziert die nächste Anweisung irgendwie. In diesem Fall handelt es sich um ein `extern`, das Rust mitteilt, dass wir einige extern definierte Funktionen aufrufen wollen. Das Attribut sagt: "wasm-bindgen weiß, wie man diese Funktionen findet".

Die dritte Zeile ist eine Funktionsdeklaration, geschrieben in Rust. Sie sagt: "die Funktion `alert` nimmt ein Argument, einen String namens `s`."

Wie Sie vielleicht vermuten, handelt es sich um [die von JavaScript bereitgestellte `alert`-Funktion](/de/docs/Web/API/Window/alert). Wir rufen diese Funktion im nächsten Abschnitt auf.

Immer wenn Sie JavaScript-Funktionen aufrufen möchten, können Sie sie zu dieser Datei hinzufügen, und `wasm-bindgen` richtet alles für Sie ein. Noch nicht alles wird unterstützt, aber wir arbeiten daran. Bitte [melden Sie Fehler](https://github.com/rustwasm/wasm-bindgen/issues/new), wenn etwas fehlt.

#### Rust-Funktionen erstellen, die von JavaScript aufgerufen werden können

Der letzte Teil ist dieser:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Wieder einmal sehen wir das `#[wasm_bindgen]` Attribut. In diesem Fall modifiziert es keinen `extern`-Block, sondern ein `fn`; das bedeutet, dass wir möchten, dass diese Rust-Funktion von JavaScript aufgerufen werden kann. Es ist das Gegenteil von `extern`: das sind nicht die Funktionen, die wir benötigen, sondern die Funktionen, die wir der Welt zur Verfügung stellen.

Diese Funktion heißt `greet` und nimmt ein Argument, einen String (geschrieben `&str`), `name`. Sie ruft dann die `alert`-Funktion auf, die wir im obigen `extern`-Block angefordert haben. Sie übergibt einen Aufruf des `format!`-Makros, das uns ermöglicht, Strings zu verknüpfen.

Das `format!`-Makro nimmt in diesem Fall zwei Argumente: einen Formatstring und eine Variable, die in ihn eingesetzt wird. Der Formatstring ist das `"Hello, {}!"`. Er enthält `{}`s, an denen Variablen interpoliert werden. Die Variable, die wir übergeben, ist `name`, das Argument der Funktion, also wenn wir `greet("Steve")` aufrufen, sollten wir `"Hello, Steve!"` sehen.

Dies wird an `alert()` übergeben, sodass wir, wenn wir diese Funktion aufrufen, ein Alarmfeld mit "Hello, Steve!" darauf sehen.

Da unsere Bibliothek nun geschrieben ist, lasst uns mit dem Kompilieren beginnen.

### Unseren Code in WebAssembly kompilieren

Um unseren Code korrekt zu kompilieren, müssen wir ihn zuerst mit `Cargo.toml` konfigurieren. Öffnen Sie diese Datei und ändern Sie ihren Inhalt wie folgt:

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

Füllen Sie Ihr eigenes Repository aus und verwenden Sie dieselben Informationen, die `git` für das Feld `authors` verwendet.

Der größte Teil, der hinzugefügt werden muss, ist der `[package]`. Der `[lib]`-Teil sagt Rust, dass es eine `cdylib`-Version unseres Pakets erstellen soll; wir werden hier nicht darauf eingehen, was das bedeutet. Weitere Informationen finden Sie in der [Cargo](https://doc.rust-lang.org/cargo/guide/)- und [Rust-Linkage](https://doc.rust-lang.org/reference/linkage.html)-Dokumentation.

Der letzte Abschnitt ist der `[dependencies]`-Abschnitt. Hier teilen wir Cargo mit, welche Version von `wasm-bindgen` wir als Abhängigkeit haben möchten; in diesem Fall ist das jede Version `0.2.z` (aber nicht `0.3.0` oder höher).

### Das Paket bauen

Jetzt, da wir die Einrichtung abgeschlossen haben, bauen wir das Paket.
Wir werden den generierten Code in einem nativen ES-Modul und in Node.js verwenden.
Zu diesem Zweck verwenden wir das [`--target` Argument](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) in `wasm-pack build`, um anzugeben, welche Art von WebAssembly und JavaScript generiert wird.

Führen Sie zunächst den folgenden Befehl in Ihrem `hello-wasm`-Verzeichnis aus:

```bash
wasm-pack build --target web
```

Dies erledigt mehrere Dinge. Um mehr darüber zu erfahren, lesen Sie diesen [Blog-Beitrag auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). Kurz gesagt, `wasm-pack build`:

1. Kompiliert Ihren Rust-Code zu WebAssembly.
2. Führt `wasm-bindgen` auf diesem WebAssembly aus und generiert eine JavaScript-Datei, die diese WebAssembly-Datei zu einem vom Browser verstehenden Modul verpackt.
3. Erstellt ein `pkg`-Verzeichnis und verschiebt diese JavaScript-Datei und Ihren WebAssembly-Code hinein.
4. Liest Ihre `Cargo.toml` und erzeugt ein entsprechendes `package.json`.
5. Kopiert Ihr `README.md` (falls vorhanden) in das Paket.

Das Endergebnis? Sie haben ein Paket im `pkg`-Verzeichnis.

## Das Paket im Web verwenden

Jetzt, da wir ein kompiliertes Wasm-Modul haben, lassen Sie uns es im Browser ausführen.
Beginnen Sie damit, eine Datei namens `index.html` im Stammverzeichnis des Projekts zu erstellen, sodass wir die folgende Projektstruktur haben:

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

Setzen Sie den folgenden Inhalt in die `index.html`-Datei:

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

Das Skript in dieser Datei wird den JavaScript-Klebstoffcode importieren, das Wasm-Modul initialisieren und die von uns in Rust geschriebene `greet`-Funktion aufrufen.

Dienen Sie das Projektverzeichnis mit einem lokalen Webserver, (z.B. `python3 -m http.server`). Wenn Sie nicht sicher sind, wie das geht, lesen Sie [Running a simple local HTTP server](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

> [!NOTE]
> Verwenden Sie einen aktuellen Webserver, der den `application/wasm` MIME-Typ unterstützt. Ältere Webserver unterstützen ihn möglicherweise noch nicht.

Laden Sie `index.html` vom Webserver (wenn Sie das Python3-Beispiel verwendet haben: `http://localhost:8000`). Ein Alarmfeld erscheint auf dem Bildschirm, das `Hello, WebAssembly!` enthält. Wir haben erfolgreich von JavaScript nach Rust und von Rust nach JavaScript aufgerufen.

## Unser Paket für npm verfügbar machen

Wir erstellen ein npm-Paket, daher müssen Sie Node.js und npm installiert haben.

Um Node.js und npm zu erhalten, besuchen Sie die Seite [Get npm!](https://docs.npmjs.com/getting-started/) und folgen Sie den Anweisungen.
Dieses Tutorial zielt auf node 20 ab. Um zwischen node-Versionen zu wechseln, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Um das WebAssembly-Modul mit npm zu verwenden, müssen wir einige Änderungen vornehmen.
Beginnen wir mit der erneuten Kompilierung unseres Rust mit der `bundler`-Option als Ziel:

```bash
wasm-pack build --target bundler
```

Wir haben nun ein npm-Paket, das in Rust geschrieben, aber in WebAssembly kompiliert ist. Es ist bereit zur Verwendung von JavaScript aus, und erfordert nicht, dass der Benutzer Rust installiert; der enthaltene Code war der WebAssembly-Code, nicht der Rust-Sourcecode.

### Das npm-Paket im Web verwenden

Lassen Sie uns eine Website erstellen, die unser neues npm-Paket verwendet. Viele Leute verwenden npm-Pakete durch verschiedene Bundler-Tools, und wir werden eines dieser Tools, `webpack`, in diesem Tutorial verwenden. Es ist nur ein wenig komplex und zeigt einen realistischen Anwendungsfall.

Erstellen Sie ein neues Verzeichnis innerhalb des `hello-wasm`-Verzeichnisses namens `site`, um es auszuprobieren.
Wir haben das Paket noch nicht in das npm-Registry veröffentlicht, also können wir es von einer lokalen Version mit `npm i /path/to/package` installieren.
Sie können [`npm link`](https://docs.npmjs.com/cli/v10/commands/npm-link/) verwenden, aber die Installation von einem lokalen Pfad ist für diese Demo praktisch:

```bash
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die `webpack` Entwicklungsabhängigkeiten:

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@5 copy-webpack-plugin@12
```

Als nächstes müssen wir webpack konfigurieren. Erstellen Sie `webpack.config.js` und setzen Sie folgendes hinein:

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

Erstellen Sie als nächstes eine Datei namens `index.js`, und geben Sie ihr diesen Inhalt:

```js
import * as wasm from "hello-wasm";

wasm.greet("WebAssembly with npm");
```

Dies importiert das Modul aus dem `node_modules`-Ordner und ruft die `greet`-Funktion auf, wobei `"WebAssembly with npm"` als String übergeben wird. Beachten Sie, dass hier nichts Besonderes ist, und trotzdem rufen wir Rust-Code auf. Für den JavaScript-Code sieht dies einfach wie ein normales Modul aus.

Schließlich müssen wir eine HTML-Datei hinzufügen, um das JavaScript zu laden. Erstellen Sie eine `index.html` Datei und fügen Sie das folgende hinzu:

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

Das `hello-wasm/site`-Verzeichnis sollte wie folgt aussehen:

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

Dies startet einen Webserver und öffnet `http://localhost:8080`. Sie sollten ein Alarmfeld auf dem Bildschirm mit dem Text `Hello, WebAssembly with npm!` sehen. Wir haben das Rust-Modul erfolgreich mit npm verwendet!

Wenn Sie Ihr WebAssembly außerhalb der lokalen Entwicklung nutzen möchten, können Sie das Paket mit den Befehlen `pack` und `publish` innerhalb Ihres `hello-wasm`-Verzeichnisses veröffentlichen:

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

Um auf npm zu veröffentlichen, benötigen Sie ein [npm-Konto](https://www.npmjs.com/) und müssen Ihren Computer mit [`npm adduser`](https://docs.npmjs.com/cli/v10/commands/npm-adduser/) autorisieren.
Wenn Sie bereit sind, können Sie mit `wasm-pack` veröffentlichen, das `npm publish` im Hintergrund aufruft:

```bash
wasm-pack publish
```

## Fazit

Damit endet unser Tutorial; wir hoffen, dass Sie es nützlich fanden.

Es gibt viele spannende Arbeiten in diesem Bereich; wenn Sie dazu beitragen möchten, es noch besser zu machen, schauen Sie sich die [Rust and WebAssembly Working Group](https://github.com/rustwasm/team/blob/master/README.md#get-involved) an.
