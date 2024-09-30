---
title: Kompilieren von Rust zu WebAssembly
slug: WebAssembly/Rust_to_Wasm
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{WebAssemblySidebar}}

Wenn Sie etwas Rust-Code haben, können Sie diesen in [WebAssembly](/de/docs/WebAssembly) (Wasm) kompilieren. Dieses Tutorial zeigt Ihnen, wie Sie ein Rust-Projekt in WebAssembly kompilieren und in einer vorhandenen Web-App verwenden können.

## Anwendungsfälle für Rust und WebAssembly

Es gibt zwei Hauptanwendungsfälle für Rust und WebAssembly:

- Eine gesamte Anwendung erstellen — eine komplette Web-App, die in Rust geschrieben ist.
- Einen Teil einer Anwendung erstellen — Rust in einer bestehenden JavaScript-Frontend verwenden.

Derzeit konzentriert sich das Rust-Team auf den letzteren Fall, und genau das behandeln wir hier. Für den ersten Fall schauen Sie sich Projekte wie [`yew`](https://github.com/yewstack/yew) an.

In diesem Tutorial erstellen wir ein Paket mit `wasm-pack`, einem Werkzeug zum Erstellen von JavaScript-Paketen in Rust. Dieses Paket wird nur WebAssembly- und JavaScript-Code enthalten, sodass die Benutzer des Pakets Rust nicht installiert haben müssen. Sie werden möglicherweise nicht einmal bemerken, dass es in Rust geschrieben ist.

## Rust-Umgebung einrichten

Gehen wir alle erforderlichen Schritte durch, um unsere Umgebung einzurichten.

### Rust installieren

Installieren Sie Rust, indem Sie die [Install Rust](https://www.rust-lang.org/tools/install) Seite besuchen und den Anweisungen folgen. Dies installiert ein Werkzeug namens "rustup", mit dem Sie mehrere Versionen von Rust verwalten können. Standardmäßig wird die neueste stabile Rust-Version installiert, die Sie für die allgemeine Rust-Entwicklung verwenden können. Rustup installiert `rustc`, den Rust-Compiler, sowie `cargo`, Rusts Paketmanager, `rust-std`, Rusts Standardbibliotheken, und einige hilfreiche Dokumentationen — `rust-docs`.

> [!NOTE]
> Achten Sie auf die Post-Installationshinweise bezüglich des `bin`-Verzeichnisses von Cargo in Ihrem System-`PATH`. Dies wird automatisch hinzugefügt, aber Sie müssen Ihr Terminal neu starten, damit es wirksam wird.

### wasm-pack

Um das Paket zu erstellen, benötigen wir ein zusätzliches Werkzeug, `wasm-pack`. Dies hilft beim Kompilieren des Codes zu WebAssembly sowie beim Erstellen der richtigen Verpackung zur Nutzung im Browser. Um es herunterzuladen und zu installieren, geben Sie den folgenden Befehl in Ihr Terminal ein:

```bash
cargo install wasm-pack
```

## Erstellen unseres WebAssembly-Pakets

Genug Vorbereitung; lassen Sie uns ein neues Paket in Rust erstellen. Navigieren Sie zu dem Verzeichnis, in dem Sie Ihre persönlichen Projekte aufbewahren, und geben Sie Folgendes ein:

```bash
cargo new --lib hello-wasm
```

Dies erstellt eine neue Bibliothek in einem Unterverzeichnis namens `hello-wasm` mit allem, was Sie für den Einstieg benötigen:

```plain
├── Cargo.toml
└── src
    └── lib.rs
```

Zuerst haben wir `Cargo.toml`; dies ist die Datei, die wir zur Konfiguration unseres Builds verwenden. Wenn Sie `Gemfile` von Bundler oder `package.json` von npm verwendet haben, wird Ihnen dies wahrscheinlich vertraut vorkommen; Cargo funktioniert in ähnlicher Weise wie beide.

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

Wir werden diesen Testcode nicht verwenden, also gehen Sie weiter und löschen Sie ihn.

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

Dies sind die Inhalte unseres Rust-Projekts. Es hat drei Hauptteile; lassen Sie uns über jeden von ihnen im Einzelnen sprechen. Wir geben hier eine umfassende Erklärung und überfliegen einige Details; um mehr über Rust zu erfahren, lesen Sie bitte das kostenlose Online-Buch [The Rust Programming Language](https://doc.rust-lang.org/book/).

#### Verwenden von `wasm-bindgen`, um zwischen Rust und JavaScript zu kommunizieren

Der erste Teil sieht so aus:

```rust
use wasm_bindgen::prelude::*;
```

Bibliotheken werden in Rust "crates" genannt.

Verstanden? _Cargo_ liefert _crates_.

Die erste Zeile enthält einen `use`-Befehl, der Code aus einer Bibliothek in Ihren Code importiert. In diesem Fall importieren wir alles im `wasm_bindgen::prelude` Modul. Wir verwenden diese Funktionen im nächsten Abschnitt.

Bevor wir zum nächsten Abschnitt übergehen, sollten wir ein wenig mehr über `wasm-bindgen` sprechen.

`wasm-pack` verwendet `wasm-bindgen`, ein weiteres Werkzeug, um eine Brücke zwischen den Typen von JavaScript und Rust bereitzustellen. Es ermöglicht JavaScript, eine Rust-API mit einem String aufzurufen, oder eine Rust-Funktion, eine JavaScript-Ausnahme abzufangen.

Wir verwenden `wasm-bindgen`'s Funktionalität in unserem Paket. Tatsächlich folgt das im nächsten Abschnitt.

#### Aufrufen von externen Funktionen in JavaScript aus Rust

Der nächste Teil sieht so aus:

```rust
#[wasm_bindgen]
extern {
    pub fn alert(s: &str);
}
```

Das Stück innerhalb des `#[ ]` wird "Attribut" genannt, und es modifiziert die nächste Anweisung irgendwie. In diesem Fall ist diese Anweisung ein `extern`, das Rust mitteilt, dass wir einige extern definierte Funktionen aufrufen möchten. Das Attribut sagt "wasm-bindgen weiß, wie man diese Funktionen findet".

Die dritte Zeile ist eine Funktionssignatur, geschrieben in Rust. Sie sagt, dass die `alert`-Funktion ein Argument, einen String namens `s`, benötigt.

Wie Sie vielleicht vermuten, ist dies [die `alert` Funktion, die von JavaScript bereitgestellt wird](/de/docs/Web/API/Window/alert). Wir rufen diese Funktion im nächsten Abschnitt auf.

Immer wenn Sie JavaScript-Funktionen aufrufen möchten, können Sie sie dieser Datei hinzufügen, und `wasm-bindgen` kümmert sich um die Einrichtung für Sie. Nicht alles wird bereits unterstützt, aber wir arbeiten daran. Bitte [melden Sie Fehler](https://github.com/rustwasm/wasm-bindgen/issues/new), wenn etwas fehlt.

#### Produzieren von Rust-Funktionen, die durch JavaScript aufgerufen werden können

Der letzte Teil ist dieser:

```rust
#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}
```

Wieder einmal sehen wir das `#[wasm_bindgen]` Attribut. In diesem Fall modifiziert es keinen `externen` Block, sondern ein `fn`; das bedeutet, dass wir möchten, dass diese Rust-Funktion von JavaScript aufgerufen werden kann. Es ist das Gegenteil von `extern`: dies sind nicht die Funktionen, die wir benötigen, sondern die Funktionen, die wir der Welt geben.

Diese Funktion heißt `greet` und nimmt ein Argument, einen String (geschrieben `&str`), `name`. Dann ruft es die `alert`-Funktion auf, die wir im obigen `externen` Block angefordert haben. Es übergibt einen Aufruf an das `format!`-Makro, das uns das Zusammenfügen von Strings ermöglicht.

Das `format!`-Makro nimmt in diesem Fall zwei Argumente, einen Format-String und eine Variable, die darin platziert wird. Der Format-String ist der `"Hello, {}!"`-Teil. Er enthält `{}`s, wo Variablen interpoliert werden. Die Variable, die wir übergeben, ist `name`, das Argument der Funktion, sodass wir, wenn wir `greet("Steve")` aufrufen, `"Hello, Steve!"` sehen sollten.

Dies wird an `alert()` übergeben, sodass, wenn wir diese Funktion aufrufen, ein Warnfeld mit "Hello, Steve!" darin angezeigt wird.

Da unsere Bibliothek nun geschrieben ist, lassen Sie sie uns kompilieren.

### Unseren Code nach WebAssembly kompilieren

Um unseren Code korrekt zu kompilieren, müssen wir ihn zuerst mit `Cargo.toml` konfigurieren. Öffnen Sie diese Datei und ändern Sie deren Inhalt wie folgt:

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

Der große Teil zum Hinzufügen ist der `[package]`. Der `[lib]` Teil sagt Rust, dass er eine `cdylib`-Version unseres Pakets erstellen soll; wir werden in diesem Tutorial nicht darauf eingehen, was das bedeutet. Weitere Informationen finden Sie in der [Cargo](https://doc.rust-lang.org/cargo/guide/) und [Rust Linkage](https://doc.rust-lang.org/reference/linkage.html) Dokumentation.

Der letzte Abschnitt ist der `[dependencies]` Abschnitt. Hier teilen wir Cargo mit, welche Version von `wasm-bindgen` wir einbeziehen möchten; in diesem Fall ist das jede `0.2.z` Version (aber nicht `0.3.0` oder höher).

### Das Paket erstellen

Nun, da wir alles eingerichtet haben, lassen Sie uns das Paket erstellen.
Wir werden den generierten Code in einem nativen ES-Modul und in Node.js verwenden.
Zu diesem Zweck verwenden wir das [`--target` Argument](https://rustwasm.github.io/docs/wasm-pack/commands/build.html#target) in `wasm-pack build`, um anzugeben, welche Art von WebAssembly und JavaScript generiert wird.

Zuerst führen Sie den folgenden Befehl aus:

```bash
wasm-pack build --target web
```

Dies macht eine Reihe von Dingen (und sie benötigen viel Zeit, insbesondere bei der ersten Ausführung von `wasm-pack`). Um sie im Detail kennenzulernen, lesen Sie [diesen Blogbeitrag auf Mozilla Hacks](https://hacks.mozilla.org/2018/04/hello-wasm-pack/). Kurz gesagt, `wasm-pack build`:

1. Kompiliert Ihren Rust-Code zu WebAssembly.
2. Führt `wasm-bindgen` auf diesem WebAssembly aus und generiert eine JavaScript-Datei, die diese WebAssembly-Datei in ein Modul umwandelt, das der Browser verstehen kann.
3. Erstellt ein `pkg`-Verzeichnis und verschiebt diese JavaScript-Datei und Ihren WebAssembly-Code in dieses.
4. Liest Ihre `Cargo.toml` und erstellt eine äquivalente `package.json`.
5. Kopiert Ihre `README.md` (falls vorhanden) in das Paket.

Das Endergebnis? Sie haben ein Paket im `pkg`-Verzeichnis.

#### Ein Exkurs über die Codegröße

Wenn Sie die generierte WebAssembly-Codegröße prüfen, können es einige hundert Kilobyte sein. Wir haben Rust überhaupt nicht angewiesen, für die Größe zu optimieren, und das wird die Größe _erheblich_ reduzieren. Dies geht über den Rahmen dieses Tutorials hinaus, aber wenn Sie mehr erfahren möchten, schauen Sie sich die Dokumentation der Rust WebAssembly Working Group zum [Verkleinern der .wasm-Größe](https://rustwasm.github.io/book/game-of-life/code-size.html#shrinking-wasm-size) an.

## Verwenden des Pakets im Web

Da wir nun ein kompiliertes Wasm-Modul haben, lassen Sie es uns im Browser ausführen.
Lassen Sie uns mit der Erstellung einer Datei namens `index.html` im Stammverzeichnis des Projekts beginnen, sodass wir mit folgender Projektstruktur enden:

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

Legen Sie den folgenden Inhalt in die `index.html`-Datei:

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

Bedienen Sie das Stammverzeichnis des Projekts mit einem lokalen Webserver (z.B. `python3 -m http.server`). Wenn Sie nicht sicher sind, wie das geht, lesen Sie den Artikel [Einfachen lokalen HTTP-Server ausführen](/de/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server).

> [!NOTE]
> Stellen Sie sicher, dass Sie einen auf dem neuesten Stand befindlichen Webserver verwenden, der den MIME-Typ `application/wasm` unterstützt. Ältere Webserver unterstützen diesen möglicherweise noch nicht.

Laden Sie `index.html` vom Webserver (wenn Sie das Beispiel mit Python3 verwendet haben: `http://localhost:8000`). Ein Warnfeld erscheint auf dem Bildschirm, mit `Hello, WebAssembly!` darin. Wir haben erfolgreich von JavaScript in Rust und von Rust in JavaScript aufgerufen.

## Unser Paket für npm verfügbar machen

Wir erstellen ein npm-Paket, daher müssen Sie Node.js und npm installiert haben.

Um Node.js und npm zu erhalten, gehen Sie zur [npm abrufen!](https://docs.npmjs.com/getting-started/) Seite und folgen Sie den Anweisungen.
Dieses Tutorial zielt auf Node 20 ab. Wenn Sie zwischen Node-Versionen wechseln müssen, können Sie [nvm](https://github.com/nvm-sh/nvm) verwenden.

Wenn Sie das WebAssembly-Modul mit npm verwenden möchten, müssen wir einige Änderungen vornehmen.
Beginnen wir damit, unser Rust mit der `bundler`-Option als Ziel neu zu kompilieren:

```bash
wasm-pack build --target bundler
```

Wir haben jetzt ein npm-Paket, das in Rust geschrieben, aber zu WebAssembly kompiliert ist. Es ist bereit zur Verwendung aus JavaScript heraus und erfordert nicht, dass der Benutzer Rust installiert hat; der enthaltene Code war der WebAssembly-Code, nicht der Rust-Quellcode.

### Das npm-Paket im Web verwenden

Lassen Sie uns eine Website erstellen, die unser neues npm-Paket verwendet. Viele Menschen nutzen npm-Pakete über verschiedene Bundler-Tools, und wir werden eines davon, `webpack`, in diesem Tutorial verwenden. Es ist nur ein wenig komplex und zeigt einen realistischen Anwendungsfall.

Gehen Sie zurück aus dem `pkg`-Verzeichnis und erstellen Sie ein neues Verzeichnis, `site`, um dies auszuprobieren.
Wir haben das Paket noch nicht im npm-Registry veröffentlicht, daher können wir es aus einer lokalen Version unter Verwendung von `npm i /path/to/package` installieren.
Sie können [`npm link`](https://docs.npmjs.com/cli/v10/commands/npm-link/) verwenden, aber das Installieren von einem lokalen Pfad ist für den Zweck dieser Demo praktisch:

```bash
cd ..
mkdir site && cd site
npm i ../pkg
```

Installieren Sie die `webpack` Dev-Abhängigkeiten:

```bash
npm i -D webpack@5 webpack-cli@5 webpack-dev-server@4 copy-webpack-plugin@11
```

Als nächstes müssen wir Webpack konfigurieren. Erstellen Sie `webpack.config.js` und fügen Sie Folgendes darin ein:

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

In Ihrer `package.json` können Sie `build` und `serve` Skripte hinzufügen, die Webpack mit der gerade erstellten Konfigurationsdatei ausführen:

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

Dies importiert das Modul aus dem `node_modules`-Ordner und ruft die `greet`-Funktion auf und übergibt `"WebAssembly with npm"` als String. Beachten Sie, dass hier nichts Besonderes ist, und dennoch rufen wir Rust-Code auf. Für den JavaScript-Code ist dies einfach nur ein normales Modul.

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

Das `hello-wasm/site`-Verzeichnis sollte folgendermaßen aussehen:

```plain
├── index.html
├── index.js
├── node_modules
├── package-lock.json
├── package.json
└── webpack.config.js
```

Wir sind fertig mit der Erstellung von Dateien. Lassen Sie uns das ausprobieren:

```bash
npm run serve
```

Dies startet einen Webserver und öffnet `http://localhost:8080`. Sie sollten ein Warnfeld auf dem Bildschirm sehen, mit `Hello, WebAssembly with npm!` darin. Wir haben das Rust-Modul erfolgreich mit npm verwendet!

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

Um in npm zu veröffentlichen, benötigen Sie ein [npm-Konto](https://www.npmjs.com/) und müssen Ihre Maschine mit [`npm adduser`](https://docs.npmjs.com/cli/v10/commands/npm-adduser/) autorisieren.
Wenn Sie bereit sind, können Sie mit `wasm-pack` veröffentlichen, das `npm publish` im Hintergrund aufruft:

```bash
wasm-pack publish
```

## Fazit

Dies ist das Ende unseres Tutorials; wir hoffen, dass Sie es nützlich fanden.

Es gibt viele spannende Arbeiten in diesem Bereich; wenn Sie helfen möchten, es noch besser zu machen, schauen Sie sich die [Rust and WebAssembly Working Group](https://github.com/rustwasm/team/blob/master/README.md#get-involved) an.
