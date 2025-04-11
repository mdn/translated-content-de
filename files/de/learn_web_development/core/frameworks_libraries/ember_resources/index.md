---
title: Ember-Ressourcen und Fehlerbehebung
slug: Learn_web_development/Core/Frameworks_libraries/Ember_resources
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}

Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie für Ihre Weiterentwicklung nutzen können, sowie einige nützliche Informationen zur Fehlerbehebung und weitere Hinweise.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Es wird mindestens empfohlen, mit den Kernsprachen <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS</a> und <a href="/de/docs/Learn_web_development/Core/Scripting">JavaScript</a> vertraut zu sein und Kenntnisse über die <a href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line">Terminal-/Kommandozeilenumgebung</a> zu haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Features (wie Klassen, Module, etc.) wird äußerst vorteilhaft sein, da Ember intensiv von ihnen Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Weitere Ressourcelinks und Informationen zur Fehlerbehebung bereitzustellen.
      </td>
    </tr>
  </tbody>
</table>

## Weitere Ressourcen

- [Ember.JS Leitfäden](https://guides.emberjs.com/release/)

  - [Tutorial: Super Rentals](https://guides.emberjs.com/release/tutorial/part-1/)

- [Ember.JS API-Dokumentation](https://api.emberjs.com/ember/release/)
- [Ember.JS Discord-Server](https://discord.com/invite/emberjs) — ein Forum/Chat-Server, auf dem Sie die Ember-Community treffen, um Hilfe bitten und anderen helfen können!

## Allgemeine Fehlerbehebung, Stolpersteine und Missverständnisse

Dies ist keineswegs eine umfangreiche Liste, sondern eine Liste von Dingen, die zur Zeit des Schreibens (letztes Update, Mai 2020) aufgekommen sind.

### Wie debugge ich, was im Framework vor sich geht?

Für _framework-spezifische_ Dinge gibt es das [ember-inspector Add-on](https://guides.emberjs.com/release/ember-inspector/), das die Inspektion von Folgendem erlaubt:

- Routen & Controller
- Komponenten
- Dienste
- Promises
- Daten (d.h. von einer entfernten API — standardmäßig von ember-data)
- Deprecation Informationen
- Render-Performance

Für allgemeines JavaScript-Debugging schauen Sie sich unsere [Anleitungen zum JavaScript-Debugging](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) sowie die Interaktion mit den [anderen Debugging-Tools des Browsers](https://firefox-source-docs.mozilla.org/devtools-user/index.html) an. In jedem Standard-Ember-Projekt wird es zwei Haupt-JavaScript-Dateien geben, `vendor.js` und `{app-name}.js`. Beide Dateien werden mit Sourcemaps generiert, sodass die Sourcemap geladen wird und der Haltepunkt im vor-übersetzten Code platziert wird, wenn Sie `vendor.js` oder `{app-name}.js` öffnen, um nach relevantem Code zu suchen.

Weitere Informationen zu Sourcemaps, warum sie benötigt werden und was ember-cli mit ihnen macht, finden Sie im [Erweiterte Nutzung: Asset-Kompilierung](https://cli.emberjs.com/release/advanced-use/asset-compilation/) Leitfaden. Beachten Sie, dass Sourcemaps standardmäßig aktiviert sind.

### `ember-data` ist vorinstalliert; benötige ich es?

Überhaupt nicht. Während `ember-data` _die häufigsten Probleme_ löst, mit denen jede App zu kämpfen hat, die mit Daten umgeht, ist es möglich, Ihren eigenen Front-End-Daten-Client zu erstellen. Eine häufige Alternative zu jedem voll ausgestatteten Front-End-Daten-Client ist [The Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch).

Unter Verwendung der vom Framework bereitgestellten Entwurfsmuster würde eine `Route` mit `fetch()` etwa so aussehen:

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

Dies ist die _häufigste_ Frage, die Ember-Leute von Personen hören, die vorherige Erfahrungen mit [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started) haben. Während es technisch möglich ist, JSX oder jede andere Form der DOM-Erstellung zu verwenden, ist noch nichts so robust wie das Templating-System von Ember. Der absichtliche Minimalismus erzwingt bestimmte Entscheidungen und ermöglicht konsistenteren Code, während das Template mehr strukturell bleibt, anstatt mit maßgeschneiderter Logik gefüllt zu werden.

Siehe auch: [ReactiveConf 2017: Secrets of the Glimmer VM](https://www.youtube.com/watch?v=nXCSloXZ-wc)

### Was ist der Stand des `mut`-Hilfsmittels?

`mut` wurde in diesem Tutorial nicht behandelt und ist wirklich ein Überbleibsel aus einer Übergangszeit, als Ember von der bidirektionalen Datenbindung zu dem gebräuchlicheren und leichter nachvollziehbaren unidirektionalen Datenfluss wechselte. Es könnte als Build-Time-Transform angesehen werden, das sein Argument mit einer Setter-Funktion umhüllt.

Konkreter ausgedrückt ermöglicht `mut` die Deklaration von reinen Template-Einstellungsfunktionen:

```hbs-nolint
<Checkbox
  @value=\{{this.someData}}
  @onToggle=\{{fn (mut this.someData) (not this.someData)}}
/>
```

Ohne `mut` wäre hingegen eine Komponentenklasse erforderlich:

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

Aufgrund der Kürze der Verwendung von `mut` mag es wünschenswert sein, darauf zurückzugreifen. Jedoch hat `mut` unnatürliche Semantik und hat im Laufe seiner Existenz viel Verwirrung gestiftet.

Es wurden einige neue Ideen in Form von Addons entwickelt, die die öffentlichen APIs verwenden, [`ember-set-helper`](https://github.com/adopted-ember-addons/ember-set-helper) und [`ember-box`](https://github.com/pzuraq/ember-box). Beide versuchen, die Probleme von `mut` zu lösen, indem sie auffälligere / "weniger magische" Konzepte einführen, Build-Time-Transforms vermeiden und implizites Glimmer-VM-Verhalten.

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

Beachten Sie, dass keine dieser Lösungen besonders verbreitet unter Mitgliedern der Community ist und insgesamt die Leute immer noch versuchen, eine ergonomische und einfache API zu finden, um Daten in einem kontextlosen Template ohne unterstützendes JS zu setzen.

### Was ist der Zweck von Controllern?

[Controller](https://guides.emberjs.com/release/routing/controllers/) sind [Singletons](https://en.wikipedia.org/wiki/Singleton_pattern), die das Rendering des aktiven Routen-Kontexts verwalten können. An der Oberfläche funktionieren sie ähnlich wie das unterstützende JavaScript einer Komponente. Controller sind (Stand Januar 2020) der einzige Weg, URL-Abfrageparameter zu verwalten.

Idealerweise sollten Controller in ihren Verantwortlichkeiten ziemlich leicht sein und, wo möglich, an Komponenten und Dienste delegieren.

### Was ist der Zweck von Routen?

Eine [Route](https://guides.emberjs.com/release/routing/defining-your-routes/) repräsentiert einen Teil der URL, wenn ein Benutzer von Ort zu Ort in der App navigiert. Eine Route hat nur wenige Verantwortlichkeiten:

- Laden der _minimal erforderlichen Daten_, um die Route (oder den Ansichts-Teilbaum) darzustellen.
- Zugriff auf die Route gewähren und bei Bedarf umleiten.
- Behandeln von Lade- und Fehlzuständen der minimal erforderlichen Daten.

Eine Route hat nur 3 Lebenszyklus-Hooks, die alle optional sind:

- `beforeModel` — Zugang zur Route gewähren.
- `model` — wo Daten geladen werden.
- `afterModel` — Zugang verifizieren.

Zuletzt hat eine Route die Fähigkeit, auf allgemeine Ereignisse zu reagieren, die sich aus der Konfiguration des `models` ergeben:

- `loading` — was zu tun ist, während der `model`-Hook lädt.
- `error` — was zu tun ist, wenn ein Fehler aus `model` geworfen wird.

Sowohl `loading` als auch `error` können Standardvorlagen sowie angepasste Vorlagen, die anderswo in der Anwendung definiert sind, rendern und die Lade-/Fehlerzustände vereinheitlichen.

Weitere Informationen zu [alles, was eine Route tun kann, finden Sie in der API-Dokumentation](https://api.emberjs.com/ember/release/classes/route/).

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}
