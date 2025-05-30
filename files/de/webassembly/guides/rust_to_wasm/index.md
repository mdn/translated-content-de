---
title: Kompilieren von Rust zu WebAssembly
slug: WebAssembly/Guides/Rust_to_Wasm
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

Wenn Sie etwas Rust-Code haben, können Sie ihn in [WebAssembly](/de/docs/WebAssembly) (Wasm) kompilieren. Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt in WebAssembly kompilieren und es in eine bestehende Web-App integrieren können.

## Anwendungsfälle für Rust und WebAssembly

Es gibt zwei Hauptanwendungsfälle für Rust und WebAssembly:

- Eine gesamte Anwendung bauen — eine komplette Web-App basiert auf Rust.
- Einen Teil einer Anwendung bauen — Rust in einem bestehenden JavaScript-Frontend verwenden.

Derzeit konzentriert sich das Rust-Team auf den letzteren Fall, und genau das decken wir hier ab. Für den ersten Fall schauen Sie sich Projekte wie [`yew`](https://github.com/yewstack/yew) und [leptos](https://github.com/leptos-rs/leptos) an.

In diesem Tutorial erstellen wir ein Paket mit `wasm-pack`, einem Tool zur Erstellung von JavaScript-Paketen in Rust. Dieses Paket wird nur WebAssembly- und JavaScript-Code enthalten, sodass Benutzer Rust nicht installiert haben müssen. Sie merken möglicherweise nicht einmal, dass es in Rust geschrieben ist.

## Rust-Umgebung einrichten

Wir beginnen damit, die notwendige Umgebung einzurichten.

### Rust installieren

Installieren Sie Rust, indem Sie die Seite [Rust installieren](https://www.rust-lang.org/tools/install) aufrufen und den Anweisungen folgen. Dadurch wird ein Tool namens "rustup" installiert, das Ihnen ermöglicht, mehrere Rust-Versionen zu verwalten. Standardmäßig wird die neueste stabile Rust-Version installiert, die Sie für allgemeine Rust-Entwicklung nutzen können. Rustup installiert `rustc`, den Rust-Compiler, `cargo`, Rusts Paketmanager, `rust-std`, Rusts Standardbibliotheken, und einige hilfreiche Dokumentationen — `rust-docs`.

> [!NOTE]
> Achten Sie auf den Hinweis nach der Installation bezüglich des `bin`-Verzeichnisses von Cargo, das in Ihrem System-`PATH` enthalten sein muss. Dies wird automatisch hinzugefügt, aber Sie müssen Ihr Terminal neu starten, damit es wirksam wird.

### wasm-pack

Um das Paket zu erstellen, benötigen wir ein weiteres Tool, `wasm-pack`. Dies hilft, den Code in WebAssembly zu kompilieren und die richtige Verpackung für die Nutzung im Browser zu erstellen. Um es herunterzuladen und zu installieren, geben Sie folgenden Befehl in Ihr Terminal ein:

```bash
cargo install wasm-pack
```

## Erstellen unseres WebAssembly-Pakets

Genug Vorbereitung; lassen Sie uns ein neues Paket in Rust erstellen. Navigieren Sie zu dem Ordner, in dem Sie Ihre Projekte speichern, und geben Sie dies ein:

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

Cargo hat auch einigen Rust-Code für uns in `src/lib.rs` generiert:

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

Wir werden den generierten Code in `src/lib.rs`, der oben gezeigt wurde, nicht verwenden; ersetzen Sie ihn mit dem folgenden:

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

Unser Rust-Code hat drei Hauptteile; lassen Sie uns über jeden davon sprechen. Wir geben hier eine allgemeine Erklärung und überspringen einige Details; um mehr über Rust zu erfahren, schauen Sie bitte in das kostenlose Onlinebuch [The Rust Programming Language](https://doc.rust-lang.org/book/).

#### Mit `wasm-bindgen` zwischen Rust und JavaScript kommunizieren

Der erste Teil sieht so aus:

```rust
use wasm_bindgen::prelude::*;
```

Bibliotheken werden in Rust "crates" genannt.

Verstanden? _Cargo_ transportiert _crates_.

Die erste Zeile enthält einen `use`-Befehl, der Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles im Modul `wasm_bindgen::prelude`. Wir verwenden diese Funktionen im nächsten Abschnitt.

Bevor wir zum nächsten Abschnitt übergehen, sollten wir mehr über `wasm-bindgen` sprechen.

`wasm-pack` verwendet `wasm-bindgen`, ein weiteres Tool, um eine Brücke zwischen den Typen von JavaScript und Rust zu bilden. Es ermöglicht JavaScript, ein Rust-API mit einem String aufzurufen oder eine Rust-Funktion eine JavaScript-Ausnahme abzufangen.

Wir verwenden die Funktionalität von `wasm-bindgen` in unserem Paket. Tatsächlich ist das der nächste Abschnitt.

#### Externe Funktionen in JavaScript von Rust aus aufrufen

Der nächste Teil sieht so aus:

```rust
#[wasm_bindgen]
extern "C" {
    pub fn alert(s: &str);
}
```

Der Abschnitt innerhalb des `#[ ]` wird "Attribut" genannt und modifiziert die nächste Anweisung irgendwie. In diesem Fall ist diese Anweisung ein `extern`, das Rust mitteilt, dass wir einige extern definierte Funktionen aufrufen möchten. Das Attribut besagt, dass "wasm-bindgen weiß, wie man diese Funktionen findet".

Die dritte Zeile ist eine Funktionssignatur, die in Rust geschrieben ist. Sie besagt, dass die Funktion `alert` ein Argument, einen String namens `s`, benötigt.

Wie Sie vermuten können, handelt es sich hierbei um die [JavaScript-Funktion `alert`](/de/docs/Web/API/Window/alert). Wir rufen diese Funktion im nächsten Abschnitt auf.

Wann immer Sie JavaScript-Funktionen aufrufen möchten, können Sie sie dieser Datei hinzufügen, und `wasm-bindgen` richtet alles für Sie ein. Noch nicht alles wird unterstützt, aber wir arbeiten daran. Bitte [melden Sie Fehler](https://github.com/rustwasm/wasm-bindgen/issues/new), wenn etwas fehlt.

#### Rust-Funktionen erzeugen, die von JavaScript aufgerufen werden können

Der letzte Teil ist dieser:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Wieder sehen wir das `#[wasm_bindgen]`-Attribut. In diesem Fall wird nicht ein `extern`-Block modifiziert, sondern ein `fn`; das bedeutet, dass wir möchten, dass diese Rust-Funktion von JavaScript aufgerufen werden kann. Es ist das Gegenteil von `extern`: dies sind nicht die Funktionen, die wir benötigen, sondern eher die Funktionen, die wir der Welt anbieten.

Diese Funktion ist `greet` genannt und benötigt ein Argument, einen String (geschrieben als `&str`), `name`. Sie ruft dann die `alert`-Funktion auf, die wir im vorherigen `extern`-Block angefordert haben. Sie übergibt einen Aufruf an das `format!`-Makro, das uns ermöglicht, Strings zu verketten.

Das `format!`-Makro benötigt in diesem Fall zwei Argumente: einen Format-String und eine Variable, um ihn darin zu platzieren. Der Format-String ist der `"Hello, {}!"`-Teil. Er enthält `{}`, wo Variablen interpoliert werden. Die Variable, die wir übergeben, ist `name`, das Argument der Funktion, also sollten wir, wenn wir `greet("Steve")` aufrufen, `"Hello, Steve!"` sehen.

Dies wird an `alert()` übergeben, sodass wir, wenn wir diese Funktion aufrufen, ein Alert-Fenster mit "Hello, Steve!" darin sehen.

Da unsere Bibliothek nun geschrieben ist, lassen Sie uns sie bauen.

### Kompilieren unseres Codes zu WebAssembly

Um unseren Code korrekt zu kompilieren, konfigurieren wir ihn zuerst mit `Cargo.toml`. Öffnen Sie diese Datei und ändern Sie ihren Inhalt, damit er so aussieht:

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

Füllen Sie Ihr eigenes Repository aus und verwenden Sie die gleichen Informationen, die `git` für das Feld `authors` verwendet.

Der wesentliche Teil, der hinzugefügt werden muss, ist der `[package]`. Der `[lib]`-Teil weist Rust an, eine `cdylib`-Version unseres Pakets zu erstellen; wir gehen hier nicht darauf ein, was das bedeutet. Für mehr Informationen konsultieren Sie die [Cargo](https://doc.rust-lang.org/cargo/guide/)- und [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html)-Dokumentation.

Der letzte Abschnitt ist der `[dependencies]`-Abschnitt. Hier teilen wir Cargo mit, welche Version von `wasm-bindgen` wir abhängen möchten; in diesem Fall ist das jede `0.2.z`-Version (aber nicht `0.3.0` oder höher).

### Paket erstellen

Nun, da wir die Vorbereitung abgeschlossen haben, lassen Sie uns das Paket erstellen.
Wir werden den generierten Code in einem nativen ES-Modul und Node.js verwenden.
Zu diesem Zweck verwenden wir das [`--target` Argument](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) in `wasm-pack build`, um anzugeben, welche Art von WebAssembly und JavaScript generiert werden soll.

Führen Sie zunächst den folgenden Befehl innerhalb Ihres `hello-wasm`-Verzeichnisses aus:

```bash
wasm-pack build --target web
```

Dies macht mehrere Dinge. Um sie im Detail zu verstehen, schauen Sie sich [diesen Blogbeitrag auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/) an. Kurz gesagt, `wasm-pack build`:

1. Kompiliert Ihren Rust-Code zu WebAssembly.
2. Führt `wasm-bindgen` auf diesem WebAssembly aus und generiert eine JavaScript-Datei, die diese WebAssembly-Datei in ein Modul einfasst, das der Browser verstehen kann.
3. Erstellt ein `pkg`-Verzeichnis und verschiebt diese JavaScript-Datei sowie Ihren WebAssembly-Code dorthin.
4. Liest Ihre `Cargo.toml` und erstellt ein entsprechendes `package.json`.
5. Kopiert Ihr `README.md` (falls Sie eines haben) in das Paket.

Das Endergebnis? Sie haben ein Paket im `pkg`-Verzeichnis.

## Verwendung des Pakets im Web

Nun, da wir ein kompiliertes Wasm-Modul haben, lassen Sie es uns im Browser ausführen.
Beginnen wir damit, eine Datei namens `index.html` im Root des Projekts zu erstellen, sodass wir die folgende Projektstruktur haben:

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

Das Skript in dieser Datei importiert den JavaScript-Leercode, initialisiert das Wasm-Modul und ruft die `greet`-Funktion auf, die wir in Rust geschrieben haben.

Servieren Sie das Projekt-Root mit einem lokalen Webserver (z. B. `python3 -m http.server`). Wenn Sie nicht sicher sind, wie Sie das machen, schauen Sie in die [Anleitung zum Einrichten eines einfachen lokalen HTTP-Servers](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

> [!NOTE]
> Verwenden Sie einen aktuellen Webserver, der den `application/wasm` MIME-Typ unterstützt. Ältere Webserver unterstützen dies möglicherweise noch nicht.

Laden Sie `index.html` vom Webserver (wenn Sie das Python3-Beispiel verwendet haben: `http://localhost:8000`). Ein Alert-Fenster erscheint auf dem Bildschirm mit `Hello, WebAssembly!`. Wir haben erfolgreich von JavaScript nach Rust und von Rust nach JavaScript aufgerufen.

## Unser Paket für npm verfügbar machen

Wir erstellen ein npm-Paket, also müssen Sie Node.js und npm installiert haben.

Um Node.js und npm zu erhalten, gehen Sie auf die Seite [Get npm!](https://docs.npmjs.com/getting-started/) und folgen Sie den Anweisungen.
Dieses Tutorial zielt auf Node 20 ab. Um zwischen Node-Versionen zu wechseln, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Um das WebAssembly-Modul mit npm zu verwenden, müssen wir einige Änderungen vornehmen.
Beginnen wir damit, unser Rust mit der `bundler`-Option als Ziel neu zu kompilieren:

```bash
wasm-pack build --target bundler
```

Wir haben nun ein npm-Paket, das in Rust geschrieben, aber zu WebAssembly kompiliert ist. Es ist bereit für die Verwendung von JavaScript aus und erfordert nicht, dass der Benutzer Rust installiert; der enthaltene Code war der WebAssembly-Code, nicht der Rust-Quellcode.

### Verwenden des npm-Pakets im Web

Lassen Sie uns eine Website erstellen, die unser neues npm-Paket verwendet. Viele Leute verwenden npm-Pakete über verschiedene Bundler-Tools, und wir werden eines davon, `webpack`, in diesem Tutorial verwenden. Es ist nur ein bisschen komplex und zeigt eine realistische Nutzung.

Lassen Sie uns ein neues Verzeichnis innerhalb des `hello-wasm`-Verzeichnisses namens `site` erstellen, um es auszuprobieren.
Wir haben das Paket noch nicht im npm-Register veröffentlicht, daher können wir es aus einer lokalen Version mit `npm i /path/to/package` installieren.
Sie können [`npm link`](https://docs.npmjs.com/cli/v10/commands/npm-link/) verwenden, aber die Installation aus einem lokalen Pfad ist für diese Demo bequem:

```bash
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die `webpack`-Entwicklungsabhängigkeiten:

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@5 copy-webpack-plugin@12
```

Als nächstes müssen wir webpack konfigurieren. Erstellen Sie `webpack.config.js` und fügen Sie folgendes hinzu:

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

In Ihrem `package.json` können Sie `build`- und `serve`-Skripte hinzufügen, die webpack mit der gerade erstellten Konfigurationsdatei ausführen:

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

Als nächstes erstellen Sie eine Datei namens `index.js` und geben ihr den folgenden Inhalt:

```js
import * as wasm from "hello-wasm";

wasm.greet("WebAssembly with npm");
```

Dies importiert das Modul aus dem `node_modules`-Ordner und ruft die `greet`-Funktion auf, wobei `"WebAssembly with npm"` als String übergeben wird. Beachten Sie, dass hier nichts Besonderes geschieht, und dennoch rufen wir Rust-Code auf. Aus Sicht des JavaScript-Codes ist dies einfach ein normales Modul.

Schließlich müssen wir eine HTML-Datei hinzufügen, um das JavaScript zu laden. Erstellen Sie eine `index.html`-Datei und fügen Sie folgendes hinzu:

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

Wir sind fertig mit der Erstellung der Dateien. Probieren wir es aus:

```bash
npm run serve
```

Dies startet einen Webserver und öffnet `http://localhost:8080`. Sie sollten ein Alert-Fenster auf dem Bildschirm sehen, das den Text `Hello, WebAssembly with npm!` enthält. Wir haben erfolgreich das Rust-Modul mit npm verwendet!

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

Um zu npm zu veröffentlichen, benötigen Sie ein [npm-Konto](https://www.npmjs.com/) und müssen Ihre Maschine mit [`npm adduser`](https://docs.npmjs.com/cli/v10/commands/npm-adduser/) autorisieren.
Wenn Sie bereit sind, können Sie mit `wasm-pack` veröffentlichen, das `npm publish` im Hintergrund aufruft:

```bash
wasm-pack publish
```

## Fazit

Damit endet unser Tutorial; wir hoffen, Sie fanden es nützlich.

Es gibt viele spannende Entwicklungen in diesem Bereich; wenn Sie dazu beitragen möchten, dass es noch besser wird, besuchen Sie die [Rust and WebAssembly Working Group](https://github.com/rustwasm/team/blob/master/README.md#get-involved).
