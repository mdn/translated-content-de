---
title: Kompilierung von Rust zu WebAssembly
slug: WebAssembly/Rust_to_Wasm
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{WebAssemblySidebar}}

Wenn Sie über etwas Rust-Code verfügen, können Sie ihn in [WebAssembly](/de/docs/WebAssembly) (Wasm) kompilieren. Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt in WebAssembly kompilieren und in einer bestehenden Web-App verwenden können.

## Anwendungsfälle für Rust und WebAssembly

Es gibt zwei Hauptanwendungsfälle für Rust und WebAssembly:

- Eine gesamte Anwendung erstellen — eine komplette Web-App, die auf Rust basiert.
- Einen Teil einer Anwendung erstellen — Rust in einem bestehenden JavaScript-Frontend verwenden.

Derzeit konzentriert sich das Rust-Team auf den zweiten Fall, und deshalb behandeln wir diesen hier. Für den ersten Fall schauen Sie sich Projekte wie [`yew`](https://github.com/yewstack/yew) an.

In diesem Tutorial bauen wir ein Paket mit `wasm-pack`, einem Tool zum Erstellen von JavaScript-Paketen in Rust. Dieses Paket wird nur WebAssembly- und JavaScript-Code enthalten, sodass die Nutzer des Pakets kein Rust installiert haben müssen. Sie werden möglicherweise nicht einmal bemerken, dass es in Rust geschrieben ist.

## Rust-Umgebungseinrichtung

Lassen Sie uns alle erforderlichen Schritte durchgehen, um unsere Umgebung einzurichten.

### Rust installieren

Installieren Sie Rust, indem Sie zur [Install Rust](https://www.rust-lang.org/tools/install)-Seite gehen und den Anweisungen folgen. Dies installiert ein Tool namens "rustup", mit dem Sie mehrere Versionen von Rust verwalten können. Standardmäßig wird die neueste stabile Rust-Version installiert, die Sie für die allgemeine Rust-Entwicklung verwenden können. Rustup installiert `rustc`, den Rust-Compiler, sowie `cargo`, Rusts Paketmanager, `rust-std`, Rusts Standardbibliotheken, und einige hilfreiche Dokumentationen — `rust-docs`.

> [!NOTE]
> Achten Sie auf den Hinweis nach der Installation, dass das `bin`-Verzeichnis von Cargo zu Ihrem System-`PATH` hinzugefügt werden muss. Dies geschieht automatisch, aber Sie müssen Ihr Terminal neu starten, damit es wirksam wird.

### wasm-pack

Um das Paket zu bauen, benötigen wir ein zusätzliches Tool, `wasm-pack`. Dies hilft, den Code in WebAssembly zu kompilieren und das richtige Packaging für den Einsatz im Browser zu erstellen. Um es herunterzuladen und zu installieren, geben Sie den folgenden Befehl in Ihr Terminal ein:

```bash
cargo install wasm-pack
```

## Unser WebAssembly-Paket erstellen

Genug der Einrichtung; lassen Sie uns ein neues Paket in Rust erstellen. Navigieren Sie zu dem Ort, an dem Sie Ihre persönlichen Projekte aufbewahren, und geben Sie Folgendes ein:

```bash
cargo new --lib hello-wasm
```

Dies erstellt eine neue Bibliothek in einem Unterverzeichnis namens `hello-wasm` mit allem, was Sie zum Loslegen benötigen:

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

Zuerst haben wir `Cargo.toml`; dies ist die Datei, die wir verwenden, um unseren Build zu konfigurieren. Wenn Sie `Gemfile` aus Bundler oder `package.json` von npm verwendet haben, dürfte dies bekannt vorkommen; Cargo arbeitet ähnlich wie beide.

Als nächstes hat Cargo uns etwas Rust-Code in `src/lib.rs` generiert:

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```

Wir werden diesen Testcode überhaupt nicht verwenden, also löschen Sie ihn.

### Lassen Sie uns etwas Rust schreiben

Lassen Sie uns stattdessen diesen Code in `src/lib.rs` einfügen:

```rust
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Dies sind die Inhalte unseres Rust-Projekts. Es hat drei Hauptteile; lassen Sie uns über jeden von ihnen der Reihe nach sprechen. Wir geben hier eine grundlegende Erklärung und übergehen einige Details; um mehr über Rust zu lernen, lesen Sie bitte das kostenlose Online-Buch [The Rust Programming Language](https://doc.rust-lang.org/book/).

#### Verwenden von `wasm-bindgen`, um zwischen Rust und JavaScript zu kommunizieren

Der erste Teil sieht so aus:

```rust
use wasm_bindgen::prelude::*;
```

Bibliotheken werden in Rust "Crates" genannt.

Verstanden? _Cargo_ transportiert _Crates_.

Die erste Zeile enthält einen `use`-Befehl, der Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles im Modul `wasm_bindgen::prelude`. Wir verwenden diese Funktionen im nächsten Abschnitt.

Bevor wir zum nächsten Abschnitt übergehen, sollten wir etwas mehr über `wasm-bindgen` sprechen.

`wasm-pack` verwendet `wasm-bindgen`, ein weiteres Tool, um eine Brücke zwischen den Typen von JavaScript und Rust zu schaffen. Es erlaubt JavaScript, eine Rust-API mit einem String aufzurufen oder einer Rust-Funktion eine JavaScript-Ausnahme zu fangen.

Wir verwenden die Funktionalität von `wasm-bindgen` in unserem Paket. Tatsächlich ist das der nächste Abschnitt.

#### Aufrufen externer Funktionen in JavaScript von Rust

Der nächste Teil sieht so aus:

```rust
#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}
```

Das Stück in den `#[ ]` wird als "Attribut" bezeichnet und verändert die nächste Anweisung irgendwie. In diesem Fall ist diese Anweisung ein `extern`, das Rust mitteilt, dass wir einige extern definierte Funktionen aufrufen möchten. Das Attribut sagt "wasm-bindgen weiß, wie man diese Funktionen findet".

Die dritte Zeile ist eine Funktionssignatur, die in Rust geschrieben ist. Sie sagt "Die Funktion `alert` nimmt ein Argument, einen String namens `s`."

Wie Sie vielleicht vermuten, ist dies die [`alert`-Funktion, die von JavaScript bereitgestellt wird](/de/docs/Web/API/Window/alert). Wir rufen diese Funktion im nächsten Abschnitt auf.

Wann immer Sie JavaScript-Funktionen aufrufen möchten, können Sie diese zu dieser Datei hinzufügen, und `wasm-bindgen` kümmert sich darum, alles für Sie einzurichten. Noch nicht alles wird unterstützt, aber wir arbeiten daran. Bitte [melden Sie Fehler](https://github.com/rustwasm/wasm-bindgen/issues/new), wenn etwas fehlt.

#### Erstellen von Rust-Funktionen, die von JavaScript aufgerufen werden können

Der letzte Teil ist dieser:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Wieder einmal sehen wir das `#[wasm_bindgen]`-Attribut. In diesem Fall modifiziert es keinen `extern`-Block, sondern eine `fn`; das bedeutet, dass wir möchten, dass diese Rust-Funktion von JavaScript aufgerufen werden kann. Es ist das Gegenteil von `extern`: das sind nicht die Funktionen, die wir brauchen, sondern die Funktionen, die wir der Welt geben.

Diese Funktion heißt `greet` und nimmt ein Argument, einen String (geschrieben `&str`), `name`. Sie ruft dann die `alert`-Funktion auf, die wir im `extern`-Block oben angefordert haben. Sie übergibt einen Aufruf an das `format!`-Makro, das es uns ermöglicht, Strings zu verketten.

Das `format!`-Makro nimmt in diesem Fall zwei Argumente, einen Format-String und eine darin einzubettende Variable. Der Format-String ist das "`Hello, {}!`"-Stück. Es enthält `{}`s, an denen Variablen eingebettet werden. Die Variable, die wir übergeben, ist `name`, das Argument der Funktion, sodass, wenn wir `greet("Steve")` aufrufen, wir `"Hello, Steve!"` sehen sollten.

Dies wird an `alert()` übergeben, sodass wir, wenn wir diese Funktion aufrufen, ein Benachrichtigungsfenster mit "Hello, Steve!" darin sehen werden.

Da unsere Bibliothek nun geschrieben ist, lassen Sie uns sie bauen.

### Unseren Code in WebAssembly kompilieren

Um unseren Code korrekt zu kompilieren, müssen wir ihn zuerst mit `Cargo.toml` konfigurieren. Öffnen Sie diese Datei und ändern Sie ihren Inhalt, sodass er so aussieht:

```toml
[package]
name = "hello-wasm"
version = "0.1.0"
authors = ["Your Name <you@example.com>"]
description = "A sample project with wasm-pack"
license = "MIT/Apache-2.0"
repository = "https://github.com/yourgithubusername/hello-wasm"
edition = "2018"

[lib]
crate-type = ["cdylib"]

[dependencies]
wasm-bindgen = "0.2"
```

Füllen Sie Ihr eigenes Repository ein und verwenden Sie dieselben Informationen, die `git` für das `authors`-Feld verwendet.

Der große Teil, der hinzugefügt wird, ist der `[package]`. Der `[lib]`-Teil sagt Rust, dass es eine `cdylib`-Version unseres Pakets bauen soll; wir werden in diesem Tutorial nicht näher darauf eingehen, was das bedeutet. Für mehr Informationen konsultieren Sie die Dokumentation für [Cargo](https://doc.rust-lang.org/cargo/guide/) und [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html).

Der letzte Abschnitt ist der `[dependencies]`-Abschnitt. Hier sagen wir Cargo, von welcher Version von `wasm-bindgen` wir abhängig sein wollen; in diesem Fall ist das eine beliebige `0.2.z`-Version (aber nicht `0.3.0` oder höher).

### Das Paket bauen

Jetzt, da wir alles eingerichtet haben, lassen Sie uns das Paket bauen.
Wir werden den generierten Code in einem nativen ES-Modul und in Node.js verwenden.
Zu diesem Zweck werden wir das [`--target` Argument](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) in `wasm-pack build` verwenden, um anzugeben, welche Art von WebAssembly und JavaScript generiert werden soll.

Laufen Sie zuerst den folgenden Befehl:

```bash
wasm-pack build --target web
```

Dies tut ein paar Dinge (und sie dauern lange, besonders beim ersten Mal, wenn Sie `wasm-pack` laufen lassen). Um mehr darüber im Detail zu erfahren, schauen Sie in [diesen Blogpost auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). Kurz gesagt, `wasm-pack build`:

1. Kompiliert Ihren Rust-Code zu WebAssembly.
2. Führt `wasm-bindgen` auf dieser WebAssembly aus und generiert eine JavaScript-Datei, die diese WebAssembly-Datei in ein Modul einpackt, das der Browser verstehen kann.
3. Erstellt ein `pkg`-Verzeichnis und verschiebt diese JavaScript-Datei und Ihren WebAssembly-Code hinein.
4. Liest Ihr `Cargo.toml` und erzeugt ein entsprechendes `package.json`.
5. Kopiert Ihre `README.md` (falls Sie eine haben) in das Paket.

Das Endergebnis? Sie haben ein Paket im `pkg`-Verzeichnis.

#### Ein Exkurs über Code-Größe

Wenn Sie sich die generierte WebAssembly-Codegröße ansehen, kann sie ein paar hundert Kilobyte groß sein. Wir haben Rust überhaupt nicht angewiesen, für Größe zu optimieren, und dies zu tun, reduziert die Größe _erheblich_. Dies geht über den Rahmen dieses Tutorials hinaus, aber wenn Sie mehr lernen möchten, schauen Sie sich die Dokumentation der Rust-WebAssembly-Arbeitsgruppe zu [Schrumpfen der .wasm-Größe](https://rustwasm.github.io/book/game-of-life/code-size.html#shrinking-wasm-size) an.

## Das Paket im Web verwenden

Nun, da wir ein kompiliertes Wasm-Modul haben, lassen Sie es uns im Browser ausführen.
Beginnen wir damit, eine Datei namens `index.html` im Root-Verzeichnis des Projekts zu erstellen, damit wir die folgende Projektstruktur erhalten:

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

Geben Sie den folgenden Inhalt in die `index.html`-Datei ein:

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

Das Skript in dieser Datei wird den JavaScript-Verklebungscode importieren, das Wasm-Modul initialisieren und die `greet`-Funktion aufrufen, die wir in Rust geschrieben haben.

Dienen Sie das Root-Verzeichnis des Projekts mit einem lokalen Webserver (z.B. `python3 -m http.server`). Wenn Sie nicht sicher sind, wie das geht, beachten Sie [Einfachen lokalen HTTP-Server ausführen](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

> [!NOTE]
> Stellen Sie sicher, dass Sie einen aktuellen Webserver verwenden, der den `application/wasm` MIME-Typ unterstützt. Ältere Webserver unterstützen ihn möglicherweise noch nicht.

Laden Sie `index.html` vom Webserver (wenn Sie das Python3-Beispiel verwendet haben: `http://localhost:8000`). Ein Benachrichtigungsfenster erscheint auf dem Bildschirm mit `Hello, WebAssembly!`. Wir haben erfolgreich aus JavaScript in Rust und aus Rust in JavaScript aufgerufen.

## Unser Paket für npm verfügbar machen

Wir erstellen ein npm-Paket, daher müssen Sie Node.js und npm installiert haben.

Um Node.js und npm zu erhalten, gehen Sie zur [Get npm!](https://docs.npmjs.com/getting-started/) Seite und folgen den Anweisungen.
Dieses Tutorial zielt auf Node 20 ab. Wenn Sie zwischen Node-Versionen wechseln müssen, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Wenn Sie das WebAssembly-Modul mit npm verwenden möchten, müssen wir einige Änderungen vornehmen.
Lassen Sie uns damit beginnen, unser Rust mit der `bundler`-Option als Ziel neu zu kompilieren:

```bash
wasm-pack build --target bundler
```

Wir haben jetzt ein npm-Paket, das in Rust geschrieben, aber in WebAssembly kompiliert ist. Es ist bereit für den Einsatz aus JavaScript und erfordert nicht, dass der Benutzer Rust installiert hat; der im Paket enthaltene Code war der WebAssembly-Code, nicht der Rust-Quellcode.

### Das npm-Paket im Web verwenden

Lassen Sie uns eine Website erstellen, die unser neues npm-Paket verwendet. Viele Leute verwenden npm-Pakete durch verschiedene Bundler-Tools, und wir werden eines davon, `webpack`, in diesem Tutorial verwenden. Es ist nur ein bisschen komplex und zeigt einen realistischen Anwendungsfall.

Lassen Sie uns zurück aus dem `pkg`-Verzeichnis gehen und ein neues Verzeichnis, `site`, erstellen, um dies auszuprobieren.
Wir haben das Paket noch nicht in das npm-Registry veröffentlicht, also können wir es aus einer lokalen Version installieren, indem wir `npm i /path/to/package` verwenden.
Sie können [`npm link`](https://docs.npmjs.com/cli/v10/commands/npm-link/) verwenden, aber die Installation von einem lokalen Pfad ist für die Zwecke dieses Demos bequem:

```bash
cd ..
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die `webpack` Entwicklungsabhängigkeiten:

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@4 copy-webpack-plugin@11
```

Als nächstes müssen wir Webpack konfigurieren. Erstellen Sie `webpack.config.js` und fügen Sie folgendes ein:

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

In Ihrem `package.json` können Sie `build`- und `serve`-Skripte hinzufügen, die Webpack mit der soeben erstellten Konfigurationsdatei ausführen:

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
    "copy-webpack-plugin": "^11.0.0",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"
  }
}
```

Erstellen Sie als nächstes eine Datei namens `index.js` und geben Sie ihr diesen Inhalt:

```js
import * as wasm from "hello-wasm";

wasm.greet("WebAssembly with npm");
```

Dies importiert das Modul aus dem `node_modules`-Ordner und ruft die `greet`-Funktion auf, wobei `"WebAssembly with npm"` als String übergeben wird. Beachten Sie, dass hier nichts Besonderes ist, und doch rufen wir in Rust-Code auf. Soweit das JavaScript den Code erkennt, ist dies nur ein normales Modul.

Schließlich müssen wir eine HTML-Datei hinzufügen, um das JavaScript zu laden. Erstellen Sie eine `index.html` Datei und fügen diese hinzu:

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
├── index.html
├── index.js
├── node_modules
├── package-lock.json
├── package.json
└── webpack.config.js
```

Wir sind fertig mit dem Erstellen von Dateien. Lassen Sie uns dies ausprobieren:

```bash
npm run serve
```

Dies startet einen Webserver und öffnet `http://localhost:8080`. Sie sollten ein Benachrichtigungsfenster auf dem Bildschirm sehen, mit `Hello, WebAssembly with npm!` darin. Wir haben das Rust-Modul erfolgreich mit npm verwendet!

Wenn Sie Ihr WebAssembly außerhalb der lokalen Entwicklung verwenden möchten, können Sie das Paket mit den Befehlen `pack` und `publish` veröffentlichen:

```bash
wasm-pack pack
npm notice
npm notice 📦  hello-wasm@0.1.0
npm notice === Tarball Contents ===
npm notice 1.6kB  README.md
npm notice 2.5kB  hello_wasm_bg.js
npm notice 17.5kB hello_wasm_bg.wasm
npm notice 115B   hello_wasm.d.ts
npm notice 157B   hello_wasm.js
npm notice 531B   package.json
...
hello-wasm-0.1.0.tgz
[INFO]: 🎒  packed up your package!
```

Um an npm zu veröffentlichen, benötigen Sie ein [npm-Konto](https://www.npmjs.com/) und müssen Ihre Maschine mit [`npm adduser`](https://docs.npmjs.com/cli/v10/commands/npm-adduser/) autorisieren.
Wenn Sie bereit sind, können Sie mit `wasm-pack` veröffentlichen, das `npm publish` im Hintergrund aufruft:

```bash
wasm-pack publish
```

## Fazit

Dies ist das Ende unseres Tutorials; wir hoffen, dass Sie es nützlich fanden.

Es gibt viele spannende Arbeiten in diesem Bereich; wenn Sie dazu beitragen möchten, es noch besser zu machen, schauen Sie sich die [Rust und WebAssembly Arbeitsgruppe](https://github.com/rustwasm/team/blob/master/README.md#get-involved) an.
