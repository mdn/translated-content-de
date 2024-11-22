---
title: Kompilieren von Rust zu WebAssembly
slug: WebAssembly/Rust_to_Wasm
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{WebAssemblySidebar}}

Wenn Sie etwas Rust-Code haben, können Sie ihn in [WebAssembly](/de/docs/WebAssembly) (Wasm) kompilieren. Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt in WebAssembly kompilieren und in einer bestehenden Web-App verwenden.

## Anwendungsfälle für Rust und WebAssembly

Es gibt zwei Hauptanwendungsfälle für Rust und WebAssembly:

- Eine gesamte Anwendung erstellen — eine komplette Web-App basierend auf Rust.
- Einen Teil einer Anwendung erstellen — Rust in einem vorhandenen JavaScript-Frontend verwenden.

Derzeit konzentriert sich das Rust-Team auf den letzteren Fall, und das behandeln wir hier. Für den erstgenannten Fall sollten Sie sich Projekte wie [`yew`](https://github.com/yewstack/yew) anschauen.

In diesem Tutorial erstellen wir ein Paket mit `wasm-pack`, einem Tool zum Erstellen von JavaScript-Paketen in Rust. Dieses Paket wird nur WebAssembly- und JavaScript-Code enthalten, sodass die Nutzer des Pakets Rust nicht installiert haben müssen. Sie werden möglicherweise nicht einmal bemerken, dass es in Rust geschrieben ist.

## Einrichtung der Rust-Umgebung

Lassen Sie uns alle erforderlichen Schritte durchgehen, um unsere Umgebung einzurichten.

### Rust installieren

Installieren Sie Rust, indem Sie die [Rust installieren](https://www.rust-lang.org/tools/install) Seite besuchen und den Anweisungen folgen. Dies installiert ein Tool namens "rustup", mit dem Sie mehrere Versionen von Rust verwalten können. Standardmäßig wird die neueste stabile Rust-Version installiert, die Sie für die allgemeine Rust-Entwicklung verwenden können. Rustup installiert `rustc`, den Rust-Compiler, sowie `cargo`, Rusts Paketmanager, `rust-std`, Rusts Standardbibliotheken, und einige hilfreiche Dokumente — `rust-docs`.

> [!NOTE]
> Achten Sie auf den Hinweis nach der Installation, dass das `bin`-Verzeichnis von cargo in Ihrem System-`PATH` sein muss. Dies wird automatisch hinzugefügt, aber Sie müssen Ihr Terminal neu starten, damit es wirksam wird.

### wasm-pack

Um das Paket zu erstellen, benötigen wir ein zusätzliches Tool, `wasm-pack`. Dies hilft, den Code zu WebAssembly zu kompilieren und das richtige Packaging für die Verwendung im Browser zu erzeugen. Um es herunterzuladen und zu installieren, geben Sie den folgenden Befehl in Ihr Terminal ein:

```bash
cargo install wasm-pack
```

## Erstellen unseres WebAssembly-Pakets

Genug eingerichtet, lassen Sie uns ein neues Paket in Rust erstellen. Navigieren Sie zu dem Ort, an dem Sie Ihre persönlichen Projekte aufbewahren, und geben Sie Folgendes ein:

```bash
cargo new --lib hello-wasm
```

Dies erstellt eine neue Bibliothek in einem Unterverzeichnis namens `hello-wasm` mit allem, was Sie zum Start benötigen:

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

Zuerst haben wir `Cargo.toml`; dies ist die Datei, die wir verwenden, um unseren Build zu konfigurieren. Wenn Sie `Gemfile` von Bundler oder `package.json` von npm verwendet haben, wird Ihnen das wahrscheinlich bekannt vorkommen; Cargo funktioniert ähnlich wie beide.

Als Nächstes hat Cargo etwas Rust-Code für uns in `src/lib.rs` generiert:

```rust
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
```

Wir werden diesen Testcode überhaupt nicht verwenden, also löschen Sie ihn ruhig.

### Schreiben wir etwas Rust

Lassen Sie uns diesen Code in `src/lib.rs` einfügen:

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

Dies sind die Inhalte unseres Rust-Projekts. Es hat drei Hauptteile; lassen Sie uns über jeden von ihnen der Reihe nach sprechen. Wir geben hier eine allgemeine Erklärung und gehen über einige Details hinweg; um mehr über Rust zu erfahren, schauen Sie bitte das kostenlose Online-Buch [The Rust Programming Language](https://doc.rust-lang.org/book/).

#### Verwendung von `wasm-bindgen` zur Kommunikation zwischen Rust und JavaScript

Der erste Teil sieht so aus:

```rust
use wasm_bindgen::prelude::*;
```

Bibliotheken werden in Rust "Crates" genannt.

Verstanden? _Cargo_ transportiert _Crates_.

Die erste Zeile enthält einen `use`-Befehl, der Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles im Modul `wasm_bindgen::prelude`. Wir verwenden diese Funktionen im nächsten Abschnitt.

Bevor wir mit dem nächsten Abschnitt fortfahren, sollten wir ein wenig mehr über `wasm-bindgen` sprechen.

`wasm-pack` verwendet `wasm-bindgen`, ein weiteres Tool, um eine Brücke zwischen den Typen von JavaScript und Rust bereitzustellen. Es ermöglicht es JavaScript, eine Rust-API mit einem String aufzurufen, oder einer Rust-Funktion, eine JavaScript-Ausnahme abzufangen.

Wir verwenden die Funktionalität von `wasm-bindgen` in unserem Paket. Tatsächlich ist das der nächste Abschnitt.

#### Aufrufen von externen Funktionen in JavaScript von Rust aus

Der nächste Teil sieht so aus:

```rust
#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}
```

Das Element innerhalb von `#[ ]` wird als "Attribut" bezeichnet und modifiziert irgendwie die nächste Anweisung. In diesem Fall ist diese Anweisung ein `extern`, das Rust mitteilt, dass wir einige extern definierte Funktionen aufrufen möchten. Das Attribut sagt "wasm-bindgen weiß, wie man diese Funktionen findet".

Die dritte Zeile ist eine Funktionssignatur, geschrieben in Rust. Sie sagt "die `alert`-Funktion nimmt ein Argument, einen String namens `s`."

Wie Sie vielleicht vermuten, ist dies [die `alert`-Funktion, die von JavaScript bereitgestellt wird](/de/docs/Web/API/Window/alert). Wir rufen diese Funktion im nächsten Abschnitt auf.

Immer wenn Sie JavaScript-Funktionen aufrufen möchten, können Sie sie zu dieser Datei hinzufügen, und `wasm-bindgen` kümmert sich darum, alles für Sie einzurichten. Noch nicht alles wird unterstützt, aber wir arbeiten daran. Bitte [reicht Fehlerberichte ein](https://github.com/rustwasm/wasm-bindgen/issues/new), wenn etwas fehlt.

#### Erzeugen von Rust-Funktionen, die von JavaScript aufgerufen werden können

Der letzte Teil ist dieser hier:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Erneut sehen wir das `#[wasm_bindgen]` Attribut. In diesem Fall modifiziert es keinen `extern` Block, sondern eine `fn`; das bedeutet, dass wir möchten, dass diese Rust-Funktion von JavaScript aufgerufen werden kann. Es ist das Gegenteil von `extern`: dies sind nicht die Funktionen, die wir benötigen, sondern die Funktionen, die wir der Welt zur Verfügung stellen.

Diese Funktion heißt `greet` und nimmt ein Argument, einen String (geschrieben als `&str`), `name`. Sie ruft dann die `alert`-Funktion auf, die wir im `extern` Block oben angefordert haben. Es übergibt einen Aufruf des `format!` Makros, das uns erlaubt, Strings zu verketten.

Das `format!` Makro nimmt in diesem Fall zwei Argumente, einen Formatstring und eine Variable, die darin platziert werden soll. Der Formatstring ist der `"Hello, {}!"` Teil. Er enthält `{}`s, wo Variablen interpoliert werden. Die Variable, die wir übergeben, ist `name`, das Argument der Funktion, sodass, wenn wir `greet("Steve")` aufrufen, wir `"Hello, Steve!"` sehen sollten.

Dies wird an `alert()` übergeben, sodass wir, wenn wir diese Funktion aufrufen, ein Alert-Feld mit "Hello, Steve!" darin sehen.

Jetzt, da unsere Bibliothek geschrieben ist, lassen Sie uns sie erstellen.

### Kompilieren unseres Codes zu WebAssembly

Um unseren Code korrekt zu kompilieren, müssen wir ihn zuerst mit `Cargo.toml` konfigurieren. Öffnen Sie diese Datei und ändern Sie den Inhalt, damit er so aussieht:

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

Fügen Sie Ihr eigenes Repository ein und verwenden Sie dieselben Informationen, die `git` für das `authors`-Feld verwendet.

Der große Teil, der hinzugefügt werden muss, ist das `[package]`. Der `[lib]` Teil weist Rust an, eine `cdylib` Version unseres Pakets zu erstellen; worauf das genau hindeutet, werden wir in diesem Tutorial nicht behandeln. Für mehr, konsultieren Sie die [Cargo](https://doc.rust-lang.org/cargo/guide/) und [Rust-Verknüpfungs](https://doc.rust-lang.org/reference/linkage.html) Dokumentation.

Der letzte Abschnitt ist der `[dependencies]` Bereich. Hier sagen wir Cargo, welche Version von `wasm-bindgen` wir verwenden möchten; in diesem Fall ist das jede `0.2.z` Version (aber nicht `0.3.0` oder höher).

### Das Paket erstellen

Nun, da wir alles eingerichtet haben, lassen Sie uns das Paket erstellen. Wir werden den generierten Code in einem nativen ES-Modul und in Node.js verwenden. Zu diesem Zweck verwenden wir das [`--target` Argument](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) in `wasm-pack build`, um anzugeben, welche Art von WebAssembly und JavaScript generiert wird.

Führen Sie zuerst den folgenden Befehl aus:

```bash
wasm-pack build --target web
```

Dies erledigt eine Vielzahl von Aufgaben (und sie dauern viel Zeit, insbesondere beim ersten Ausführen von `wasm-pack`). Um sie im Detail zu lernen, lesen Sie [diesen Blogpost auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). Kurz gesagt, `wasm-pack build`:

1. Kompiliert Ihren Rust-Code zu WebAssembly.
2. Führt `wasm-bindgen` auf diesem WebAssembly aus und generiert eine JavaScript-Datei, die diese WebAssembly-Datei in ein Modul verpackt, das der Browser verstehen kann.
3. Erstellt ein `pkg` Verzeichnis und verschiebt diese JavaScript-Datei und Ihren WebAssembly-Code hinein.
4. Liest Ihre `Cargo.toml` und erstellt ein entsprechendes `package.json`.
5. Kopiert Ihr `README.md` (wenn Sie eines haben) in das Paket.

Das Endergebnis? Sie haben ein Paket im `pkg` Verzeichnis.

#### Ein Exkurs über die Codegröße

Wenn Sie die generierte WebAssembly-Codegröße betrachten, kann es einige hundert Kilobyte groß sein. Wir haben Rust überhaupt nicht angewiesen, Größe zu optimieren, und dies schneidet die Größe _erheblich_ ab. Dies liegt außerhalb des Umfangs dieses Tutorials, aber wenn Sie mehr erfahren möchten, schauen Sie sich die Dokumentation der Rust WebAssembly Arbeitsgruppe über [Verkleinern der .wasm Größe](https://rustwasm.github.io/book/game-of-life/code-size.html#shrinking-wasm-size) an.

## Verwenden des Pakets im Web

Jetzt, da wir ein kompiliertes Wasm-Modul haben, lassen Sie uns es im Browser ausführen. Beginnen wir damit, eine Datei namens `index.html` im Stammverzeichnis des Projekts zu erstellen, sodass wir folgende Projektstruktur haben:

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

Platzieren Sie den folgenden Inhalt in der `index.html` Datei:

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

Das Skript in dieser Datei wird den JavaScript-Klebercode importieren, das Wasm-Modul initialisieren und die `greet`-Funktion aufrufen, die wir in Rust geschrieben haben.

Bedienen Sie das Stammverzeichnis des Projekts mit einem lokalen Webserver (z.B. `python3 -m http.server`). Wenn Sie sich nicht sicher sind, wie das geht, schauen Sie bei [Einrichten eines einfachen lokalen HTTP-Servers](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server) nach.

> [!NOTE]
> Stellen Sie sicher, dass Sie einen aktuellen Webserver verwenden, der den `application/wasm` MIME-Typ unterstützt. Ältere Webserver könnten diesen noch nicht unterstützen.

Laden Sie `index.html` vom Webserver (wenn Sie das Python3-Beispiel verwendet haben: `http://localhost:8000`). Ein Alert-Feld erscheint auf dem Bildschirm, mit `Hello, WebAssembly!` darin. Wir haben erfolgreich vom JavaScript in Rust und von Rust in JavaScript aufgerufen.

## Unser Paket für npm verfügbar machen

Wir erstellen ein npm-Paket, daher müssen Sie Node.js und npm installiert haben.

Um Node.js und npm zu erhalten, gehen Sie zur Seite [Holen Sie sich npm!](https://docs.npmjs.com/getting-started/) und folgen Sie den Anweisungen. Dieses Tutorial zielt auf Node 20 ab. Wenn Sie zwischen verschiedenen Node-Versionen wechseln müssen, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Wenn Sie das WebAssembly-Modul mit npm verwenden möchten, müssen wir einige Änderungen vornehmen. Lassen Sie uns damit beginnen, unser Rust mit der Option `bundler` als Ziel neu zu kompilieren:

```bash
wasm-pack build --target bundler
```

Jetzt haben wir ein npm-Paket, geschrieben in Rust, aber in WebAssembly kompiliert. Es ist bereit zur Nutzung aus JavaScript und erfordert nicht, dass der Benutzer Rust installiert hat; der beigefügte Code war der WebAssembly-Code, nicht der Rust-Quellcode.

### Verwenden des npm-Pakets im Web

Lassen Sie uns eine Website erstellen, die unser neues npm-Paket verwendet. Viele Menschen nutzen npm-Pakete über verschiedene Bundler-Tools, und wir werden eines davon, `webpack`, in diesem Tutorial verwenden. Es ist nur ein wenig komplex und zeigt einen realistischen Anwendungsfall.

Lassen Sie uns aus dem `pkg` Verzeichnis herausgehen und ein neues Verzeichnis, `site`, erstellen, um dies auszuprobieren. Wir haben das Paket noch nicht beim npm-Register veröffentlicht, daher können wir es von einer lokalen Version mit `npm i /path/to/package` installieren. Sie können [`npm link`](https://docs.npmjs.com/cli/v10/commands/npm-link/) verwenden, aber das Installieren von einem lokalen Pfad ist für die Zwecke dieser Demo praktisch:

```bash
cd ..
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die `webpack`-Entwicklungsabhängigkeiten:

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@4 copy-webpack-plugin@11
```

Als nächstes müssen wir webpack konfigurieren. Erstellen Sie `webpack.config.js` und tragen Sie Folgendes ein:

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

In Ihrer `package.json` können Sie `build`- und `serve`-Scripts hinzufügen, das webpack mit der Konfigurationsdatei ausführen, die wir gerade erstellt haben:

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

Erstellen Sie als nächstes eine Datei namens `index.js` und fügen Sie ihr diesen Inhalt hinzu:

```js
import * as wasm from "hello-wasm";

wasm.greet("WebAssembly with npm");
```

Dieser importiert das Modul aus dem `node_modules` Ordner und ruft die `greet`-Funktion auf, indem er `"WebAssembly with npm"` als String übergibt. Beachten Sie, dass hier nichts Besonderes ist, und dennoch rufen wir in Rust-Code auf. Aus Sicht des JavaScript-Codes handelt es sich hier einfach um ein normales Modul.

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

Das `hello-wasm/site` Verzeichnis sollte so aussehen:

```plain
├── index.html
├── index.js
├── node_modules
├── package-lock.json
├── package.json
└── webpack.config.js
```

Wir haben das Erstellen von Dateien abgeschlossen. Versuchen wir es:

```bash
npm run serve
```

Dies startet einen Webserver und öffnet `http://localhost:8080`. Ein Alert-Feld sollte auf dem Bildschirm erscheinen, mit `Hello, WebAssembly with npm!` darin. Wir haben das Rust-Modul erfolgreich mit npm verwendet!

Wenn Sie Ihr WebAssembly außerhalb der lokalen Entwicklung nutzen möchten, können Sie das Paket mit den `pack` und `publish` Befehlen veröffentlichen:

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

Um auf npm zu veröffentlichen, benötigen Sie ein [npm-Konto](https://www.npmjs.com/) und müssen Ihre Maschine mit [`npm adduser`](https://docs.npmjs.com/cli/v10/commands/npm-adduser/) autorisieren. Wenn Sie bereit sind, können Sie mit `wasm-pack` veröffentlichen, das `npm publish` im Hintergrund aufruft:

```bash
wasm-pack publish
```

## Fazit

Dies ist das Ende unseres Tutorials; wir hoffen, dass Sie es nützlich fanden.

Es gibt viele spannende Arbeiten in diesem Bereich; wenn Sie helfen möchten, es noch besser zu machen, schauen Sie sich die [Rust und WebAssembly Arbeitsgruppe](https://github.com/rustwasm/team/blob/master/README.md#get-involved) an.
