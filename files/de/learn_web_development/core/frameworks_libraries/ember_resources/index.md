---
title: Ember-Ressourcen und Fehlerbehebung
slug: Learn_web_development/Core/Frameworks_libraries/Ember_resources
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}

Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie für Ihr weiteres Lernen nutzen können, sowie einige nützliche Fehlerbehebungsinformationen und andere Hinweise.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, dass Sie mit den Kernsprachen
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
          Ein tieferes Verständnis moderner JavaScript-Features (wie Klassen,
          Module etc.) wird äußerst vorteilhaft sein, da Ember sie stark verwendet.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Bereitstellung weiterer Ressourcenlinks und Fehlerbehebungsinformationen.
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

Dies ist keineswegs eine umfassende Liste, sondern eine Liste von Dingen, die zum Zeitpunkt der Erstellung (letztes Update, Mai 2020) aufgetaucht sind.

### Wie debugge ich, was im Framework passiert?

Für _framework-spezifische_ Dinge gibt es das [ember-inspector Add-on](https://guides.emberjs.com/release/ember-inspector/), das die Inspektion von Folgendem ermöglicht:

- Routen & Controller
- Komponenten
- Services
- Promises
- Daten (d.h. von einer entfernten API — standardmäßig von ember-data)
- Abschreibungsinformationen
- Renderleistung

Für allgemeines JavaScript-Debugging schauen Sie sich unsere [Leitfäden zum JavaScript-Debugging](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) sowie die Interaktion mit den [anderen Debugging-Tools des Browsers](https://firefox-source-docs.mozilla.org/devtools-user/index.html) an. In jedem Standard-Ember-Projekt gibt es zwei Haupt-JavaScript-Dateien, `vendor.js` und `{app-name}.js`. Beide Dateien werden mit Sourcemaps generiert, sodass beim Öffnen von `vendor.js` oder `{app-name}.js` zum Suchen des relevanten Codes, wenn ein Debugger eingesetzt wird, die Sourcemap geladen wird und der Haltepunkt im vorübersetzten Code platziert wird, um eine einfachere Zuordnung zu Ihrem Projektcode zu ermöglichen.

Weitere Informationen zu Sourcemaps, warum sie benötigt werden und was der ember-cli damit macht, finden Sie im [Advanced Use: Asset Compilation](https://cli.emberjs.com/release/advanced-use/asset-compilation/) Leitfaden. Beachten Sie, dass Sourcemaps standardmäßig aktiviert sind.

### `ember-data` ist vorinstalliert; brauche ich es?

Überhaupt nicht. Während `ember-data` _die häufigsten Probleme_ löst, mit denen jede App, die mit Daten arbeitet, konfrontiert wird, ist es möglich, seinen eigenen Frontend-Datenclient zu entwickeln. Eine häufige Alternative zu einem voll ausgestatteten Frontend-Datenclient ist [Die Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch).

Unter Verwendung der vom Framework bereitgestellten Entwurfsmuster würde eine `Route`, die `fetch()` verwendet, so aussehen:

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

Weitere Informationen zum [Spezifizieren des Modells der `Route`](https://guides.emberjs.com/release/routing/specifying-a-routes-model/) finden Sie hier.

### Warum kann ich nicht einfach JavaScript verwenden?

Dies ist die _häufigste_ Frage, die Ember-Leute von Personen hören, die vorherige Erfahrungen mit [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started) haben. Während es technisch möglich ist, JSX oder jede andere Form der DOM-Erstellung zu verwenden, gibt es bisher nichts, das so robust ist wie das Templating-System von Ember. Der bewusste Minimalismus erzwingt bestimmte Entscheidungen und ermöglicht konsequenten Code, während das Template struktureller bleibt, anstatt mit individueller Logik gefüllt zu sein.

Siehe auch: [ReactiveConf 2017: Secrets of the Glimmer VM](https://www.youtube.com/watch?v=nXCSloXZ-wc)

### Was ist der Status des `mut`-Helpers?

`mut` wurde in diesem Tutorial nicht behandelt und ist wirklich ein Überbleibsel aus einer Übergangszeit, in der Ember von bidirektional gebundenen Daten zu dem gebräuchlicheren und leichter nachvollziehbaren unidirektionalen Datenfluss überging. Es könnte als zur Build-Zeit Transformation angesehen werden, die ihr Argument mit einer Setter-Funktion umschließt.

Genauer gesagt ermöglicht es `mut`, dass nur im Template festgelegte Funktionen erklärt werden können:

```hbs-nolint
<Checkbox
  @value=\{{this.someData}}
  @onToggle=\{{fn (mut this.someData) (not this.someData)}}
/>
```

Ohne `mut` wäre hingegen eine Komponentenkategorie erforderlich:

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

Die dann im Template wie folgt aufgerufen würde:

```hbs-nolint
<Checkbox @data=\{{this.someData}} @onChange=\{{this.setData}} />
```

Aufgrund der Prägnanz der Verwendung von `mut` könnte es wünschenswert sein, darauf zurückzugreifen. `mut` hat jedoch unnatürliche Semantiken und hat in seiner Existenzzeit viele Verwirrungen verursacht.

Es gibt ein paar neue Ideen in Form von Addons, die die öffentlichen APIs verwenden, [`ember-set-helper`](https://github.com/adopted-ember-addons/ember-set-helper) und [`ember-box`](https://github.com/pzuraq/ember-box). Beide versuchen, die Probleme von `mut` zu lösen, indem sie offensichtlichere / "weniger magische" Konzepte einführen und Build-Zeit-Transformationen und implizites Glimmer-VM-Verhalten vermeiden.

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

Beachten Sie, dass keine dieser Lösungen unter den Mitgliedern der Community besonders gebräuchlich ist, und insgesamt versuchen die Leute immer noch, eine ergonomische und einfache API zum Setzen von Daten in einem reinen Template-Kontext ohne unterstützendes JS zu finden.

### Was ist der Zweck von Controllern?

[Controller](https://guides.emberjs.com/release/routing/controllers/) sind [Singletons](https://en.wikipedia.org/wiki/Singleton_pattern), die möglicherweise den Renderkontext der aktiven Route verwalten helfen. Auf den ersten Blick funktionieren sie ähnlich wie das unterstützende JavaScript einer Komponente. Controller sind (Stand Januar 2020) die einzige Möglichkeit, URL-Anfrageparameter zu verwalten.

Idealerweise sollten Controller relativ wenig Verantwortung haben und Aufgaben, wo möglich, an Komponenten und Services delegieren.

### Was ist der Zweck von Routen?

Eine [Route](https://guides.emberjs.com/release/routing/defining-your-routes/) repräsentiert einen Teil der URL, wenn ein Benutzer von einem Ort zum anderen in der App navigiert. Eine Route hat nur wenige Aufgaben:

- Das _minimal erforderliche Daten_ zum Rendern der Route (oder des Ansichts-Teilbaums) laden.
- Den Zugriff auf die Route kontrollieren und bei Bedarf umleiten.
- Lade- und Fehlerzustände von den minimal erforderlichen Daten verwalten.

Eine Route hat nur 3 Lebenszyklus-Hooks, die alle optional sind:

- `beforeModel` — Zugriff auf die Route kontrollieren.
- `model` — wo die Daten geladen werden.
- `afterModel` — Zugriff überprüfen.

Zuletzt hat eine Route die Möglichkeit, allgemeine Ereignisse zu verwalten, die sich aus der Konfiguration des `model` ergeben:

- `loading` — was zu tun ist, wenn der `model`-Hook lädt.
- `error` — was zu tun ist, wenn ein Fehler von `model` geworfen wird.

Sowohl `loading` als auch `error` können standardmäßige Vorlagen sowie individuell definierte Vorlagen an anderen Stellen in der Anwendung rendern und so Lade-/Fehlerzustände vereinheitlichen.

Weitere Informationen zu [allem, was eine Route tun kann, finden Sie in der API-Dokumentation](https://api.emberjs.com/ember/release/classes/route/).

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}
