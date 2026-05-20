---
title: Ember-Ressourcen und Fehlersuche
slug: Learn_web_development/Core/Frameworks_libraries/Ember_resources
l10n:
  sourceCommit: f5be60d013af8bfa3ff9db9a12c3c72fc7eb3988
---

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}

> [!NOTE]
> Die MDN Ember-Artikel werden nicht mehr gepflegt und in 3 Monaten (bis zum 20. August 2026) von der Website entfernt. Der Inhalt wird im [MDN Museum](https://github.com/mdn/museum) archiviert. Weitere Informationen finden Sie in [dieser Diskussion](https://github.com/orgs/mdn/discussions/827).

Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie für Ihre Weiterbildung nutzen können, sowie einige nützliche Tipps zur Fehlerbehebung und andere Informationen.

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
          Kenntnisse über die
          <a
            href="/de/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >Terminal/Kommandozeile</a
          > haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module, etc.) wird äußerst vorteilhaft sein, da Ember stark von ihnen Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Weitere Ressourcenlinks und Informationen zur Fehlerbehebung bereitzustellen.
      </td>
    </tr>
  </tbody>
</table>

## Weitere Ressourcen

- [Ember.JS Leitfäden](https://guides.emberjs.com/release/)
  - [Tutorial: Super Rentals](https://guides.emberjs.com/release/tutorial/part-1/)

- [Ember.JS API-Dokumentation](https://api.emberjs.com/ember/release/)
- [Ember.JS Discord-Server](https://discord.com/invite/emberjs) — ein Forum/Chat-Server, auf dem Sie die Ember-Community treffen, um Hilfe bitten und anderen helfen können!

## Allgemeine Fehlersuche, Fallstricke und Missverständnisse

Dies ist keineswegs eine umfassende Liste, aber sie enthält Dinge, die zur Zeit des Schreibens aufgekommen sind (letztes Update, Mai 2020).

### Wie debugge ich, was im Framework vor sich geht?

Für _framework-spezifische_ Dinge gibt es das [ember-inspector Add-on](https://guides.emberjs.com/release/ember-inspector/), das die Inspektion von Folgendem erlaubt:

- Routen & Controller
- Komponenten
- Dienste
- Promises
- Daten (z.B. aus einer entfernten API — standardmäßig von ember-data)
- Informationen zu Veraltungen
- Render-Performance

Für allgemeine JavaScript-Fehlersuche, schauen Sie sich unsere [Leitfäden zur JavaScript-Fehlersuche](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) sowie die Interaktion mit [anderen Debugging-Tools des Browsers](https://firefox-source-docs.mozilla.org/devtools-user/index.html) an. In jedem Standard-Ember-Projekt gibt es zwei Haupt-JavaScript-Dateien, `vendor.js` und `{app-name}.js`. Beide werden mit Sourcemaps generiert, sodass beim Öffnen der `vendor.js` oder `{app-name}.js`, um nach relevantem Code zu suchen, eine Debugger-Platzierung die Sourcemap lädt und der Haltepunkt im prä-transpilierten Code für eine einfachere Zuordnung zu Ihrem Projektcode platziert wird.

Für mehr Informationen über Sourcemaps, warum sie benötigt werden und was der ember-cli damit macht, siehe den [Advanced Use: Asset Compilation](https://cli.emberjs.com/release/advanced-use/asset-compilation/) Leitfaden. Beachten Sie, dass Sourcemaps standardmäßig aktiviert sind.

### `ember-data` ist vorinstalliert; brauche ich es?

Überhaupt nicht. Während `ember-data` _die häufigsten Probleme_ löst, die jede App beim Umgang mit Daten haben wird, ist es möglich, Ihren eigenen Front-End-Datenclient zu entwickeln. Eine gängige Alternative zu einem voll funktionsfähigen Front-End-Datenclient ist [The Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch).

Mit den vom Framework bereitgestellten Designmustern würde eine `Route`, die `fetch()` verwendet, etwa so aussehen:

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

Weitere Informationen zum [festlegen des `Route`-Modells](https://guides.emberjs.com/release/routing/specifying-a-routes-model/) finden Sie hier.

### Warum kann ich nicht einfach JavaScript verwenden?

Dies ist die _häufigste_ Frage, die Ember-Leute von Personen hören, die bereits Erfahrung mit [React](/de/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started) haben. Während es technisch möglich ist, JSX oder eine andere Form der DOM-Erstellung zu verwenden, hat sich noch nichts als so robust erwiesen wie das Templating-System von Ember. Der bewusste Minimalismus zwingt zu bestimmten Entscheidungen und ermöglicht konsistenteren Code, während das Template mehr strukturiert bleibt, anstatt sie mit individueller Logik zu füllen.

Siehe auch: [ReactiveConf 2017: Secrets of the Glimmer VM](https://www.youtube.com/watch?v=nXCSloXZ-wc)

### Was ist der Zustand des `mut`-Hilfsmittels?

`mut` wurde in diesem Tutorial nicht behandelt und ist wirklich Ballast aus einer Übergangszeit, als Ember von zweiwegegebundenen Daten zu den gebräuchlicheren und leichter verständlichen einwegegebundenen Datenflüssen wechselte. Es könnte als eine Buildzeit-Transformation angesehen werden, die ihr Argument mit einer Setter-Funktion umschließt.

Konkret ermöglicht die Verwendung von `mut`, dass nur im Template Funktionen zur Einstellung deklariert werden:

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

Aufgrund der Prägnanz der Verwendung von `mut` mag es wünschenswert sein, darauf zurückzugreifen. Allerdings hat `mut` unnatürliche Semantiken und hat während seiner Existenz viel Verwirrung verursacht.

Es wurden einige neue Ideen in Form von Addons zusammengefasst, die die öffentlichen APIs verwenden, [`ember-set-helper`](https://github.com/adopted-ember-addons/ember-set-helper) und [`ember-box`](https://github.com/pzuraq/ember-box). Beide versuchen, die Probleme von `mut` zu lösen, indem sie offensichtlichere / "weniger magische" Konzepte einführen, die auf Buildzeit-Transformationen und implizites Glimmer VM-Verhalten verzichten.

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

Beachten Sie, dass keine dieser Lösungen besonders häufig unter den Mitgliedern der Gemeinschaft ist, und insgesamt versuchen die Menschen immer noch, eine ergonomische und einfache API zu finden, um Daten in einem nur auf Vorlagen basierenden Kontext ohne Unterstützung durch JS zu setzen.

### Was ist der Zweck von Controllern?

[Controller](https://guides.emberjs.com/release/routing/controllers/) sind [Singletons](https://en.wikipedia.org/wiki/Singleton_pattern), die helfen können, den Rendering-Kontext der aktiven Route zu verwalten. An der Oberfläche funktionieren sie ähnlich wie das unterstützende JavaScript einer Komponente. Controller sind (Stand Januar 2020) der einzige Weg, um URL Query Params zu verwalten.

Idealerweise sollten Controller eher leicht in ihren Aufgaben sein und wo möglich an Komponenten und Dienste delegieren.

### Was ist der Zweck von Routen?

Eine [Route](https://guides.emberjs.com/release/routing/defining-your-routes/) repräsentiert einen Teil der URL, wenn ein Benutzer innerhalb der App von einem Ort zum anderen navigiert. Eine Route hat nur ein paar Verantwortungen:

- Laden der _minimal erforderlichen Daten_ zum Rendern der Route (oder Unteransicht).
- Gewährung des Zugangs zur Route und Umleitung bei Bedarf.
- Umgang mit Lade- und Fehlerzuständen der minimal erforderlichen Daten.

Eine Route hat nur 3 Lebenszyklus-Hooks, die alle optional sind:

- `beforeModel` — gewährt Zugang zur Route.
- `model` — wo Daten geladen werden.
- `afterModel` — Überprüfung des Zugangs.

Zuletzt hat eine Route die Fähigkeit, auf allgemeine Ereignisse zu reagieren, die aus der Konfiguration des `model` resultieren:

- `loading` — was zu tun ist, wenn der `model`-Hook lädt.
- `error` — was zu tun ist, wenn ein Fehler in `model` geworfen wird.

Sowohl `loading` als auch `error` können Standard-Templates sowie anderswo in der Anwendung definierte benutzerdefinierte Templates rendern, was Lade-/Fehlerzustände vereinheitlicht.

Weitere Informationen darüber, [was eine Route alles tun kann, finden Sie in der API-Dokumentation](https://api.emberjs.com/ember/release/classes/route/).

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Ember_routing", "Learn_web_development/Core/Frameworks_libraries")}}
