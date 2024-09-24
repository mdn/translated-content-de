---
title: Kompilieren von Rust zu WebAssembly
slug: WebAssembly/Rust_to_Wasm
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{WebAssemblySidebar}}

Wenn Sie Rust-Code haben, können Sie ihn in [WebAssembly](/de/docs/WebAssembly) (Wasm) kompilieren. Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt in WebAssembly kompilieren und in einer bestehenden Web-App verwenden können.

## Anwendungsfälle für Rust und WebAssembly

Es gibt zwei Hauptanwendungsfälle für Rust und WebAssembly:

- Eine gesamte Anwendung erstellen — eine vollständige Web-App, die auf Rust basiert.
- Einen Teil einer Anwendung erstellen — Rust in einem bestehenden JavaScript-Frontend verwenden.

Aktuell konzentriert sich das Rust-Team auf den letztgenannten Fall, und genau darum geht es hier. Für den erstgenannten Fall sehen Sie sich Projekte wie [`yew`](https://github.com/yewstack/yew) an.

In diesem Tutorial erstellen wir ein Paket mit `wasm-pack`, einem Tool zum Erstellen von JavaScript-Paketen in Rust. Dieses Paket wird nur WebAssembly- und JavaScript-Code enthalten, sodass die Benutzer des Pakets Rust nicht installiert haben müssen. Vielleicht merken sie nicht einmal, dass es in Rust geschrieben ist.

## Einrichten der Rust-Umgebung

Gehen wir alle erforderlichen Schritte durch, um unsere Umgebung einzurichten.

### Rust installieren

Installieren Sie Rust, indem Sie zur Seite [Rust installieren](https://www.rust-lang.org/tools/install) gehen und den Anweisungen folgen. Dies installiert ein Tool namens "rustup", mit dem Sie mehrere Versionen von Rust verwalten können. Standardmäßig wird die neueste stabile Rust-Version installiert, die Sie für die allgemeine Rust-Entwicklung verwenden können. Rustup installiert `rustc`, den Rust-Compiler, sowie `cargo`, Rusts Paket-Manager, `rust-std`, Rusts Standardbibliotheken und einige hilfreiche Dokumentationen — `rust-docs`.

> [!NOTE]
> Achten Sie auf den Hinweis nach der Installation, dass das `bin`-Verzeichnis von Cargo in Ihrem System-`PATH` sein muss. Dies wird automatisch hinzugefügt, aber Sie müssen Ihr Terminal neu starten, damit es wirksam wird.

### wasm-pack

Um das Paket zu erstellen, benötigen wir ein zusätzliches Tool, `wasm-pack`. Dies hilft dabei, den Code in WebAssembly zu kompilieren sowie das richtige Packaging für die Verwendung im Browser zu erzeugen. Um es herunterzuladen und zu installieren, geben Sie den folgenden Befehl in Ihr Terminal ein:

```bash
cargo install wasm-pack
```

## Unser WebAssembly-Paket erstellen

Genug der Einrichtung; lassen Sie uns ein neues Paket in Rust erstellen. Navigieren Sie zu dem Verzeichnis, in dem Sie Ihre persönlichen Projekte aufbewahren, und geben Sie Folgendes ein:

```bash
cargo new --lib hello-wasm
```

Dies erstellt eine neue Bibliothek in einem Unterverzeichnis namens `hello-wasm` mit allem, was Sie für den Einstieg benötigen:

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

Zuerst haben wir `Cargo.toml`; dies ist die Datei, die wir zur Konfiguration unseres Builds verwenden. Wenn Sie `Gemfile` von Bundler oder `package.json` von npm verwendet haben, wird Ihnen dies wahrscheinlich bekannt vorkommen; Cargo funktioniert ähnlich wie beide.

Als nächstes hat Cargo etwas Rust-Code für uns in `src/lib.rs` generiert:

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

### Schreiben wir etwas Rust

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

Dies ist der Inhalt unseres Rust-Projekts. Es hat drei Hauptteile; lassen Sie uns über jeden von ihnen sprechen. Wir geben hier eine hochrangige Erklärung ab und behandeln einige Details nicht; um mehr über Rust zu erfahren, lesen Sie bitte das kostenlose Online-Buch [The Rust Programming Language](https://doc.rust-lang.org/book/).

#### Verwenden von `wasm-bindgen`, um zwischen Rust und JavaScript zu kommunizieren

Der erste Teil sieht so aus:

```rust
use wasm_bindgen::prelude::*;
```

Bibliotheken werden in Rust "Crates" genannt.

Verstehen Sie? _Cargo_ transportiert _Crates_.

Die erste Zeile enthält einen `use`-Befehl, der Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles im Modul `wasm_bindgen::prelude`. Wir verwenden diese Funktionen im nächsten Abschnitt.

Bevor wir zum nächsten Abschnitt übergehen, sollten wir ein bisschen mehr über `wasm-bindgen` sprechen.

`wasm-pack` verwendet `wasm-bindgen`, ein weiteres Tool, um eine Brücke zwischen den Typen von JavaScript und Rust bereitzustellen. Es ermöglicht JavaScript, eine Rust-API mit einem String aufzurufen, oder einer Rust-Funktion, eine JavaScript-Ausnahme abzufangen.

Wir verwenden die Funktionalität von `wasm-bindgen` in unserem Paket. Tatsächlich ist das der nächste Abschnitt.

#### Externe Funktionen in JavaScript von Rust aus aufrufen

Der nächste Teil sieht so aus:

```rust
#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}
```

Der Teil innerhalb der `#[ ]` wird als „Attribut“ bezeichnet und modifiziert die folgende Anweisung irgendwie. In diesem Fall ist diese Anweisung eine `extern`, die Rust mitteilt, dass wir einige extern definierte Funktionen aufrufen möchten. Das Attribut besagt: „wasm-bindgen weiß, wie man diese Funktionen findet“.

Die dritte Zeile ist eine Funktionssignatur, die in Rust geschrieben ist. Sie besagt: „Die `alert`-Funktion nimmt ein Argument, einen String namens `s`.“

Wie Sie vielleicht vermuten, handelt es sich dabei um [die `alert`-Funktion, die von JavaScript bereitgestellt wird](/de/docs/Web/API/Window/alert). Wir rufen diese Funktion im nächsten Abschnitt auf.

Immer wenn Sie JavaScript-Funktionen aufrufen möchten, können Sie sie in diese Datei einfügen, und `wasm-bindgen` kümmert sich darum, alles für Sie einzurichten. Nicht alles wird bereits unterstützt, aber wir arbeiten daran. Bitte [melden Sie Fehler](https://github.com/rustwasm/wasm-bindgen/issues/new), wenn etwas fehlt.

#### Erstellen von Rust-Funktionen, die JavaScript aufrufen kann

Der letzte Teil ist dieser:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Wieder einmal sehen wir das `#[wasm_bindgen]`-Attribut. In diesem Fall modifiziert es keinen `extern`-Block, sondern eine `fn`; dies bedeutet, dass wir möchten, dass diese Rust-Funktion von JavaScript aufgerufen werden kann. Es ist das Gegenteil von `extern`: Dies sind nicht die Funktionen, die wir benötigen, sondern vielmehr die Funktionen, die wir der Welt zur Verfügung stellen.

Diese Funktion heißt `greet` und nimmt ein Argument, einen String (geschrieben als `&str`), `name`. Sie ruft dann die `alert`-Funktion auf, die wir im `extern`-Block oben angefordert haben. Es übergibt einen Aufruf des `format!`-Makros, das es uns ermöglicht, Strings zu verketten.

Das `format!`-Makro nimmt in diesem Fall zwei Argumente, einen Formatstring und eine Variable, die darin eingefügt werden soll. Der Formatstring ist der Teil `"Hello, {}!"`. Er enthält `{}`s, in die Variablen eingefügt werden. Die Variable, die wir übergeben, ist `name`, das Argument der Funktion. Wenn wir `greet("Steve")` aufrufen, sollten wir `"Hello, Steve!"` sehen.

Dies wird an `alert()` übergeben. Wenn wir diese Funktion aufrufen, wird ein Hinweisfeld mit „Hello, Steve!“ darauf angezeigt.

Jetzt, da unsere Bibliothek geschrieben ist, lassen Sie uns sie bauen.

### Unseren Code in WebAssembly kompilieren

Um unseren Code korrekt zu kompilieren, müssen wir ihn zuerst mit `Cargo.toml` konfigurieren. Öffnen Sie diese Datei und ändern Sie ihren Inhalt so, dass er folgendermaßen aussieht:

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

Füllen Sie Ihr eigenes Repository aus und verwenden Sie die gleichen Informationen, die `git` für das `authors`-Feld verwendet.

Der große Teil, den Sie hinzufügen müssen, ist das `[package]`. Der `[lib]`-Teil sagt Rust, dass es eine `cdylib`-Version unseres Pakets bauen soll; wir werden in diesem Tutorial nicht darauf eingehen, was das bedeutet. Für weitere Informationen konsultieren Sie die [Cargo](https://doc.rust-lang.org/cargo/guide/)- und [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html)-Dokumentation.

Der letzte Abschnitt ist der `[dependencies]`-Abschnitt. Hier sagen wir Cargo, welche Version von `wasm-bindgen` wir benötigen; in diesem Fall ist das jede Version `0.2.z` (aber nicht `0.3.0` oder höher).

### Das Paket bauen

Jetzt, da wir alles eingerichtet haben, lassen Sie uns das Paket bauen. Wir werden den generierten Code in einem nativen ES-Modul und in Node.js verwenden. Zu diesem Zweck verwenden wir das [`--target`-Argument](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) in `wasm-pack build`, um festzulegen, welche Art von WebAssembly und JavaScript generiert wird.

Führen Sie zunächst den folgenden Befehl aus:

```bash
wasm-pack build --target web
```

Dies erledigt eine Reihe von Dingen (und es dauert lange, insbesondere beim ersten Mal, wenn Sie `wasm-pack` ausführen). Um mehr darüber zu erfahren, lesen Sie diesen [Blogbeitrag auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). Kurz gesagt, `wasm-pack build`:

1. Kompiliert Ihren Rust-Code in WebAssembly.
2. Führt `wasm-bindgen` auf dieser WebAssembly aus und generiert eine JavaScript-Datei, die diese WebAssembly-Datei in ein Modul einwickelt, das der Browser verstehen kann.
3. Erstellt ein `pkg`-Verzeichnis und verschiebt diese JavaScript-Datei und Ihren WebAssembly-Code dort hinein.
4. Liest Ihre `Cargo.toml` und erzeugt ein entsprechendes `package.json`.
5. Kopiert Ihr `README.md` (falls vorhanden) in das Paket.

Das Endergebnis? Sie haben ein Paket im `pkg`-Verzeichnis.

#### Ein Exkurs über die Codegröße

Wenn Sie die generierte WebAssembly-Codegröße überprüfen, kann es ein paar hundert Kilobyte groß sein. Wir haben Rust überhaupt nicht instruiert, die Größe zu optimieren, und das verringert die Größe erheblich. Dies liegt außerhalb des Rahmens dieses Tutorials, aber wenn Sie mehr erfahren möchten, schauen Sie sich die Dokumentation der Rust WebAssembly Working Group zur [Verkleinerung der .wasm-Größe](https://rustwasm.github.io/book/game-of-life/code-size.html#shrinking-wasm-size) an.

## Das Paket im Web verwenden

Nun, da wir ein kompiliertes Wasm-Modul haben, lassen Sie uns es im Browser ausführen. Lassen Sie uns zunächst eine Datei namens `index.html` im Stammverzeichnis des Projekts erstellen, sodass wir die folgende Projektstruktur haben:

```plain
├── Cargo.lock
├── Cargo.toml
├── index.html  <-- Neue index.html Datei
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

Das Skript in dieser Datei wird den JavaScript-Klebecode importieren, das Wasm-Modul initialisieren und die `greet`-Funktion aufrufen, die wir in Rust geschrieben haben.

Dienen Sie das Hauptverzeichnis des Projekts mit einem lokalen Webserver (z.B. `python3 -m http.server`). Wenn Sie nicht sicher sind, wie das geht, lesen Sie [Einfachen lokalen HTTP-Server ausführen](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

> [!NOTE]
> Stellen Sie sicher, dass Sie einen aktuellen Webserver verwenden, der den MIME-Typ `application/wasm` unterstützt. Ältere Webserver unterstützen diesen möglicherweise noch nicht.

Laden Sie `index.html` vom Webserver (wenn Sie das Python3-Beispiel verwendet haben: `http://localhost:8000`). Ein Hinweisfeld erscheint auf dem Bildschirm mit „Hello, WebAssembly!“ darauf. Wir haben erfolgreich von JavaScript in Rust und zurück von Rust in JavaScript aufgerufen.

## Unser Paket für npm verfügbar machen

Wir erstellen ein npm-Paket, also müssen Sie Node.js und npm installiert haben.

Um Node.js und npm zu erhalten, gehen Sie zur Seite [npm installieren!](https://docs.npmjs.com/getting-started/) und folgen Sie den Anweisungen. Dieses Tutorial zielt auf Node 20 ab. Wenn Sie zwischen Node-Versionen wechseln müssen, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Wenn Sie das WebAssembly-Modul mit npm verwenden möchten, müssen wir einige Änderungen vornehmen. Beginnen wir, indem wir Rust mit der Option `bundler` als Ziel erneut kompilieren:

```bash
wasm-pack build --target bundler
```

Jetzt haben wir ein npm-Paket, das in Rust geschrieben, aber in WebAssembly kompiliert wurde. Es ist bereit zur Verwendung durch JavaScript und erfordert nicht, dass der Benutzer Rust installiert hat; der enthaltene Code war der WebAssembly-Code, nicht der Rust-Quellcode.

### Das npm-Paket im Web verwenden

Lassen Sie uns eine Website erstellen, die unser neues npm-Paket verwendet. Viele Menschen verwenden npm-Pakete über verschiedene Bundler-Tools und wir werden eines davon, `webpack`, in diesem Tutorial verwenden. Es ist nur ein bisschen komplex und zeigt einen realistischen Anwendungsfall.

Lassen Sie uns wieder aus dem `pkg`-Verzeichnis herauswechseln und ein neues Verzeichnis `site` erstellen, um dies auszuprobieren. Wir haben das Paket noch nicht im npm-Registry veröffentlicht, also können wir es aus einer lokalen Version mit `npm i /path/to/package` installieren. Sie können [`npm link`](https://docs.npmjs.com/cli/v10/commands/npm-link/) verwenden, aber das Installieren von einem lokalen Pfad ist für die Zwecke dieser Demo bequem:

```bash
cd ..
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die `webpack`-Dev-Abhängigkeiten:

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@4 copy-webpack-plugin@11
```

Als nächstes müssen wir Webpack konfigurieren. Erstellen Sie `webpack.config.js` und fügen Sie Folgendes ein:

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

In Ihrem `package.json` können Sie `build`- und `serve`-Skripte hinzufügen, die Webpack mit der gerade erstellten Konfigurationsdatei ausführen:

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

Dies importiert das Modul aus dem `node_modules`-Ordner und ruft die `greet`-Funktion auf, wobei `"WebAssembly with npm"` als String übergeben wird. Beachten Sie, dass hier nichts Besonderes ist, dennoch rufen wir in Rust-Code auf. So weit wie der JavaScript-Code feststellen kann, ist dies einfach ein normales Modul.

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

Das Verzeichnis `hello-wasm/site` sollte nun folgendermaßen aussehen:

```plain
├── index.html
├── index.js
├── node_modules
├── package-lock.json
├── package.json
└── webpack.config.js
```

Wir sind mit der Dateierstellung fertig. Probieren wir es aus:

```bash
npm run serve
```

Dies startet einen Webserver und öffnet `http://localhost:8080`. Sie sollten sehen, dass ein Hinweisfeld auf dem Bildschirm erscheint, mit „Hello, WebAssembly with npm!“ darauf. Wir haben erfolgreich das Rust-Modul mit npm verwendet!

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

Um in npm zu veröffentlichen, benötigen Sie ein [npm-Konto](https://www.npmjs.com/) und müssen Ihren Computer mit [`npm adduser`](https://docs.npmjs.com/cli/v10/commands/npm-adduser/) autorisieren. Wenn Sie bereit sind, können Sie mit `wasm-pack`, das `npm publish` im Hintergrund aufruft, veröffentlichen:

```bash
wasm-pack publish
```

## Schlussfolgerung

Hier endet unser Tutorial; wir hoffen, dass Sie es nützlich fanden.

Es gibt viel spannende Arbeit in diesem Bereich; wenn Sie helfen möchten, es noch besser zu machen, schauen Sie sich die [Rust und WebAssembly Arbeitsgruppe](https://github.com/rustwasm/team/blob/master/README.md#get-involved) an.
