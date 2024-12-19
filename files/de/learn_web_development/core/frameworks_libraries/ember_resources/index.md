---
title: Ember-Ressourcen und Fehlerbehebung
slug: Learn_web_development/Core/Frameworks_libraries/Ember_resources
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}

Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie verwenden können, um Ihr Lernen zu vertiefen, sowie einige nützliche Fehlerbehebungen und andere Informationen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Hauptsprachen
          <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>,
          <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und
          <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut sind und
          Kenntnisse über das
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) wird sehr nützlich sein, da Ember diese intensiv nutzt.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Bereitstellung weiterer Ressourcen-Links und Informationen zur Fehlerbehebung.
      </td>
    </tr>
  </tbody>
</table>

## Weitere Ressourcen

- [Ember.JS Leitfäden](https://guides.emberjs.com/release/)

  - [Tutorial: Super Rentals](https://guides.emberjs.com/release/tutorial/part-1/)

- [Ember.JS API-Dokumentation](https://api.emberjs.com/ember/release/)
- [Ember.JS Discord-Server](https://discord.com/invite/emberjs) — ein Forum/Chat-Server, auf dem Sie die Ember-Community treffen, um Hilfe bitten und anderen helfen können!

## Allgemeine Fehlerbehebung, Fallstricke und Missverständnisse

Dies ist bei Weitem keine umfassende Liste, aber es ist eine Liste von Dingen, die zum Zeitpunkt des Schreibens (letztes Update, Mai 2020) aufkamen.

### Wie kann ich debuggen, was im Framework passiert?

Für _framework-spezifische_ Dinge gibt es das [ember-inspector Add-on](https://guides.emberjs.com/release/ember-inspector/), das die Inspektion der folgenden Elemente ermöglicht:

- Routen & Controller
- Komponenten
- Dienste
- Versprechen
- Daten (d.h. von einer Remote-API — standardmäßig von ember-data)
- Informationen zur Abschaffung
- Renderleistung

Für allgemeines JavaScript-Debugging werfen Sie einen Blick auf unsere [Leitfäden zum JavaScript-Debugging](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) sowie auf die Interaktion mit den [anderen Debugging-Tools des Browsers](https://firefox-source-docs.mozilla.org/devtools-user/index.html). In jedem Standard-Ember-Projekt gibt es zwei Haupt-JavaScript-Dateien, `vendor.js` und `{app-name}.js`. Beide Dateien werden mit Sourcemaps generiert, sodass beim Öffnen der `vendor.js` oder `{app-name}.js`, um relevanten Code zu suchen, beim Platzieren eines Debuggers die Sourcemap geladen wird und der Haltepunkt im vor-transpilierten Code platziert wird, um eine einfachere Korrelation zu Ihrem Projektcode zu ermöglichen.

Weitere Informationen zu Sourcemaps, warum sie benötigt werden und was der ember-cli mit ihnen macht, finden Sie im [Fortgeschrittene Nutzung: Asset-Kompilierung](https://cli.emberjs.com/release/advanced-use/asset-compilation/) Leitfaden. Beachten Sie, dass Sourcemaps standardmäßig aktiviert sind.

### `ember-data` ist vorinstalliert; benötige ich es?

Überhaupt nicht. Obwohl `ember-data` _die häufigsten Probleme_ löst, auf die jede App, die mit Daten zu tun hat, stößt, ist es möglich, seinen eigenen Frontend-Datenclient zu entwickeln. Eine häufige Alternative zu jedem voll ausgestatteten Frontend-Datenclient ist [Die Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch).

Die vom Framework bereitgestellten Designmuster verwendend, würde eine `Route` mit `fetch()` etwa wie folgt aussehen:

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

Weitere Informationen zum [Spezifizieren des `Route`-Modells](https://guides.emberjs.com/release/routing/specifying-a-routes-model/) finden Sie hier.

### Warum kann ich nicht einfach JavaScript verwenden?

Dies ist die _häufigste_ Frage, die Ember-Anwender von Personen hören, die bereits Erfahrung mit [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started) haben. Obwohl es technisch möglich ist, JSX oder jede andere Form der DOM-Erstellung zu verwenden, gibt es bisher nichts so Robustes wie das Templating-System von Ember. Der absichtliche Minimalismus erzwingt bestimmte Entscheidungen und ermöglicht konsistenteren Code, während das Template mehr strukturell bleibt, statt voll mit maßgeschneiderter Logik zu sein.

Siehe auch: [ReactiveConf 2017: Secrets of the Glimmer VM](https://www.youtube.com/watch?v=nXCSloXZ-wc)

### Was ist der Status des `mut`-Helfers?

`mut` wurde in diesem Tutorial nicht behandelt und ist wirklich ein Überbleibsel aus einer Übergangszeit, als Ember von bidirektionaler Datenbindung zu dem gebräuchlicheren und leichter nachvollziehbaren unidirektionalen Datenfluss überging. Es könnte als eine Build-Zeit-Transformation betrachtet werden, die ihr Argument mit einer Setter-Funktion umwickelt.

Konkreter ausgedrückt, ermöglicht die Verwendung von `mut` die Deklaration von Vorlagen-spezifischen Einstellungsfunktionen:

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

Die dann im Template so aufgerufen würde:

```hbs-nolint
<Checkbox @data=\{{this.someData}} @onChange=\{{this.setData}} />
```

Aufgrund der Kürze von `mut` könnte es wünschenswert sein, darauf zurückzugreifen. `mut` hat jedoch unnatürliche Semantiken und hat während seiner Existenz viel Verwirrung gestiftet.

Es wurden einige neue Ideen in Form von Addons zusammengestellt, die die öffentlichen APIs nutzen, [`ember-set-helper`](https://github.com/adopted-ember-addons/ember-set-helper) und [`ember-box`](https://github.com/pzuraq/ember-box). Beide versuchen die Probleme von `mut` zu lösen, indem sie offensichtlichere / "weniger magische" Konzepte einführen, die Build-Zeit-Transformationen und implizites Glimmer-VM-Verhalten vermeiden.

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

Beachten Sie, dass keine dieser Lösungen besonders weit verbreitet unter den Mitgliedern der Community ist, und insgesamt versuchen die Leute immer noch, eine ergonomische und einfache API zu finden, um Daten in einem nur mit Vorlagen arbeitenden Kontext zu setzen, ohne unterstützendes JS.

### Was ist der Zweck von Controllern?

[Controller](https://guides.emberjs.com/release/routing/controllers/) sind [Singletons](https://en.wikipedia.org/wiki/Singleton_pattern), die helfen können, den Rendering-Kontext der aktiven Route zu verwalten. Oberflächlich betrachtet funktionieren sie ähnlich wie das unterstützende JavaScript einer Komponente. Controller sind (Stand: Januar 2020) die einzige Möglichkeit, URL-Query-Parameter zu verwalten.

Idealerweise sollten Controller in ihren Verantwortlichkeiten recht leicht sein und, wenn möglich, an Komponenten und Dienste delegieren.

### Was ist der Zweck von Routen?

Eine [Route](https://guides.emberjs.com/release/routing/defining-your-routes/) repräsentiert einen Teil der URL, wenn ein Benutzer von Ort zu Ort in der App navigiert. Eine Route hat nur wenige Verantwortlichkeiten:

- Laden der _minimal erforderlichen Daten_, um die Route (oder den Ansichts-Unterbaum) zu rendern.
- Zugriff auf die Route steuern und ggf. umleiten.
- Lade- und Fehlerzustände der minimal erforderlichen Daten behandeln.

Eine Route hat nur 3 Lebenszyklus-Hooks, von denen alle optional sind:

- `beforeModel` — Zugriff auf die Route gewähren.
- `model` — wo Daten geladen werden.
- `afterModel` — Zugriff verifizieren.

Zuletzt hat eine Route die Fähigkeit, häufige Ereignisse zu behandeln, die sich aus der Konfiguration des `model` ergeben:

- `loading` — was zu tun ist, wenn der `model`-Hook lädt.
- `error` — was zu tun ist, wenn ein Fehler aus `model` geworfen wird.

Sowohl `loading` als auch `error` können Standardvorlagen rendern sowie benutzerdefinierte Vorlagen, die anderswo in der Anwendung definiert sind, wodurch Lade-/Fehlerzustände vereinheitlicht werden.

Weitere Informationen darüber, was eine Route alles tun kann, finden Sie in der [API-Dokumentation](https://api.emberjs.com/ember/release/classes/route/).

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}
