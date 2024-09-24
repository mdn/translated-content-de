---
title: Ember-Ressourcen und Fehlersuche
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie für Ihr weiteres Lernen nutzen können, sowie einige nützliche Hinweise zur Fehlersuche und weitere Informationen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sind und
          Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >
          haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen, Module usw.) wird von großem Vorteil sein, da Ember diese stark nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Bereitstellung weiterer Ressourcenlinks und Informationen zur Fehlersuche.
      </td>
    </tr>
  </tbody>
</table>

## Weitere Ressourcen

- [Ember.JS Anleitungen](https://guides.emberjs.com/release/)

  - [Tutorial: Super Rentals](https://guides.emberjs.com/release/tutorial/part-1/)

- [Ember.JS API-Dokumentation](https://api.emberjs.com/ember/release/)
- [Ember.JS Discord Server](https://discord.com/invite/emberjs) — ein Forum/Chat-Server, auf dem Sie die Ember-Community treffen, um Hilfe bitten und anderen helfen können!

## Allgemeine Fehlersuche, Überraschungen und Missverständnisse

Dies ist bei weitem keine umfassende Liste, aber es ist eine Liste von Dingen, die zur Zeit des Schreibens (letztes Update, Mai 2020) aufkamen.

### Wie kann ich herausfinden, was im Framework vor sich geht?

Für framework-spezifische Dinge gibt es das [ember-inspector Add-On](https://guides.emberjs.com/release/ember-inspector/), das Inspektionen von:

- Routen & Controllern
- Komponenten
- Services
- Promises
- Daten (d. h. von einer Remote-API — standardmäßig von ember-data)
- Informationen zu veralteten Funktionen
- Renderleistung

ermöglicht.

Für allgemeines JavaScript-Debugging schauen Sie sich unsere [Anleitungen zum JavaScript-Debugging](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) sowie zur Interaktion mit den [anderen Debugging-Tools des Browsers](https://firefox-source-docs.mozilla.org/devtools-user/index.html) an. In jedem Standard-Ember-Projekt wird es zwei Haupt-JavaScript-Dateien geben, `vendor.js` und `{app-name}.js`. Beide Dateien werden mit Sourcemaps generiert, sodass, wenn Sie `vendor.js` oder `{app-name}.js` öffnen, um nach relevantem Code zu suchen, beim Setzen eines Debuggers die Sourcemap geladen wird und der Haltepunkt im vorkompilierten Code gesetzt wird, um eine einfachere Korrelation mit Ihrem Projektscode zu ermöglichen.

Für weitere Informationen zu Sourcemaps, warum sie benötigt werden und was ember-cli mit ihnen macht, siehe die Anleitung [Fortgeschrittener Gebrauch: Asset-Komprimierung](https://cli.emberjs.com/release/advanced-use/asset-compilation/). Beachten Sie, dass Sourcemaps standardmäßig aktiviert sind.

### `ember-data` ist vorinstalliert; brauche ich es?

Überhaupt nicht. Während `ember-data` _die häufigsten Probleme_ löst, auf die jede App, die mit Daten arbeitet, stoßen wird, ist es möglich, seinen eigenen Frontend-Datenclient zu entwickeln. Eine häufige Alternative zu jedem voll funktionsfähigen Frontend-Datenclient ist die [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch).

Mit den vom Framework bereitgestellten Entwurfsmustern würde eine `Route`, die `fetch()` verwendet, ungefähr so aussehen:

```js
import Route from "@ember/routing/route";

export default class MyRoute extends Route {
  async model() {
    let response = await fetch("some/url/to/json/data");
    let json = await response.json();

    return {
      data: json,
    };
  }
}
```

Weitere Informationen zum [Festlegen des Modells der `Route`](https://guides.emberjs.com/release/routing/specifying-a-routes-model/) finden Sie hier.

### Warum kann ich nicht einfach JavaScript verwenden?

Dies ist die _häufigste_ Frage, die Ember-Leute von Personen hören, die bereits Erfahrung mit [React](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started) haben. Während es technisch möglich ist, JSX oder jede andere Form der DOM-Erstellung zu verwenden, gibt es bisher nichts, das so robust wie das Templating-System von Ember ist. Der absichtliche Minimalismus erzwingt bestimmte Entscheidungen und ermöglicht konsistenteren Code, während das Template struktureller bleibt, anstatt es mit maßgeschneiderter Logik zu füllen.

Siehe auch: [ReactiveConf 2017: Secrets of the Glimmer VM](https://www.youtube.com/watch?v=nXCSloXZ-wc)

### Was ist der Status des `mut`-Helpers?

`mut` wurde in diesem Tutorial nicht behandelt und ist wirklich Altlasten aus einer Übergangszeit, als Ember von bidirektional gebundenen Daten zu dem häufigeren und leichter nachvollziehbaren unidirektionalen Datenfluss überging. Es kann als eine Build-Time-Transformation betrachtet werden, die ihr Argument mit einer Setter-Funktion umhüllt.

Konkretisiert ermöglicht `mut`, dass reine Template-Settings-Funktionen deklariert werden:

```hbs-nolint
<Checkbox
  @value=\{{this.someData}}
  @onToggle=\{{fn (mut this.someData) (not this.someData)}}
/>
```

Ohne `mut` wäre jedoch eine Komponentenklasse erforderlich:

```js
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class Example extends Component {
  @tracked someData = false;

  @action
  setData(newValue) {
    this.someData = newValue;
  }
}
```

Diese würde dann im Template so aufgerufen:

```hbs-nolint
<Checkbox @data=\{{this.someData}} @onChange=\{{this.setData}} />
```

Aufgrund der Kürze der Verwendung von `mut` mag es wünschenswert sein, darauf zurückzugreifen. `mut` hat jedoch unnatürliche Semantiken und hat über seine Existenz hinweg viel Verwirrung gestiftet.

Es wurden ein paar neue Ideen in Form von Addons entwickelt, die die öffentlichen APIs nutzen: [`ember-set-helper`](https://github.com/adopted-ember-addons/ember-set-helper) und [`ember-box`](https://github.com/pzuraq/ember-box). Beide versuchen, die Probleme von `mut` zu lösen, indem offensichtlicherer und "weniger magischer" Konzepte eingeführt werden, die Build-Time-Transformationen und implizites Glimmer-VM-Verhalten vermeiden.

Mit `ember-set-helper`:

```hbs
<Checkbox @value=\{{this.someData}} @onToggle=\{{set this "someData" (not
this.someData)}} />
```

Mit `ember-box`:

```hbs-nolint
\{{#let (box this.someData) as |someData|}}
  <Checkbox
    @value=\{{unwrap someData}}
    @onToggle=\{{update someData (not this.someData)}}
  />
\{{/let}}
```

Beachten Sie, dass keine dieser Lösungen besonders verbreitet in der Community sind und insgesamt immer noch versucht wird, eine ergonomische und einfache API zum Setzen von Daten in einem reinen Template-Kontext ohne unterstützendes JavaScript zu finden.

### Was ist der Zweck von Controllern?

[Controller](https://guides.emberjs.com/release/routing/controllers/) sind [Singletons](https://en.wikipedia.org/wiki/Singleton_pattern), die helfen können, den Rendering-Kontext der aktiven Route zu verwalten. Oberflächlich betrachtet fungieren sie ähnlich wie das unterstützende JavaScript einer Komponente. Controller sind (Stand Januar 2020) der einzige Weg, URL-Query-Parameter zu verwalten.

Idealerweise sollten Controller in ihren Verantwortlichkeiten ziemlich leichtgewichtig sein und die Aufgaben, wo möglich, an Komponenten und Dienste delegieren.

### Was ist der Zweck von Routen?

Eine [Route](https://guides.emberjs.com/release/routing/defining-your-routes/) repräsentiert einen Teil der URL, wenn ein Benutzer innerhalb der App von Ort zu Ort navigiert.
Eine Route hat nur ein paar Verantwortlichkeiten:

- Laden der _minimal erforderlichen Daten_, um die Route (oder den Ansicht-Teilbaum) zu rendern.
- Gate-Zugriff zur Route und Umleitung, falls nötig.
- Umgang mit Lade- und Fehlerzuständen der minimal erforderlichen Daten.

Eine Route hat nur 3 Lebenszyklus-Hooks, die alle optional sind:

- `beforeModel` — Gate-Zugriff zur Route.
- `model` — wo Daten geladen werden.
- `afterModel` — Zugriffsüberprüfung.

Schließlich hat eine Route die Möglichkeit, häufige Ereignisse zu verarbeiten, die sich aus der Konfiguration des `models` ergeben:

- `loading` — was zu tun ist, wenn der `model`-Hook lädt.
- `error` — was zu tun ist, wenn ein Fehler vom `model`-Hook geworfen wird.

Sowohl `loading` als auch `error` können Standardvorlagen sowie benutzerdefinierte Vorlagen rendern, die anderswo in der Anwendung definiert sind, wodurch Lade-/Fehlerzustände vereinheitlicht werden.

Weitere Informationen zu [alles, was eine Route tun kann, finden Sie in der API-Dokumentation](https://api.emberjs.com/ember/release/classes/route/).

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
