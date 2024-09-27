---
title: Ember-Ressourcen und Fehlerbehebung
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie für ein weiterführendes Lernen nutzen können, sowie einige nützliche Fehlerbehebungen und weitere Informationen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Mindestens sollten Sie mit den grundlegenden Sprachen
          <a href="/de/docs/Learn/HTML">HTML</a>,
          <a href="/de/docs/Learn/CSS">CSS</a> und
          <a href="/de/docs/Learn/JavaScript">JavaScript</a> vertraut sein und Kenntnisse über das
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Befehlszeile</a
          >haben.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen, Module usw.) wird äußerst vorteilhaft sein, da Ember stark von ihnen Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Weitere Links zu Ressourcen und Informationen zur Fehlerbehebung bereitzustellen.
      </td>
    </tr>
  </tbody>
</table>

## Weitere Ressourcen

- [Ember.JS Leitfäden](https://guides.emberjs.com/release/)

  - [Tutorial: Super Rentals](https://guides.emberjs.com/release/tutorial/part-1/)

- [Ember.JS API-Dokumentation](https://api.emberjs.com/ember/release/)
- [Ember.JS Discord Server](https://discord.com/invite/emberjs) — ein Forum/Chat-Server, auf dem Sie die Ember-Community treffen, um Hilfe bitten und anderen helfen können!

## Allgemeine Fehlerbehebung, Fallstricke und Missverständnisse

Dies ist bei weitem keine vollständige Liste, aber es ist eine Liste von Dingen, die zum Zeitpunkt des Schreibens aufkamen (letztes Update, Mai 2020).

### Wie debugge ich, was im Framework vor sich geht?

Für _framework-spezifische_ Dinge gibt es das [ember-inspector Add-on](https://guides.emberjs.com/release/ember-inspector/), das die Inspektion von Folgendem ermöglicht:

- Routen & Controller
- Komponenten
- Services
- Promises
- Daten (d. h. von einer Remote-API — standardmäßig von ember-data)
- Informationen zu Veraltungen
- Renderleistung

Für allgemeines JavaScript-Debugging schauen Sie sich unsere [Leitfäden zum JavaScript-Debugging](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) sowie die Interaktion mit den [anderen Debugging-Tools des Browsers](https://firefox-source-docs.mozilla.org/devtools-user/index.html) an. In jedem Standard-Ember-Projekt gibt es zwei Haupt-JavaScript-Dateien, `vendor.js` und `{app-name}.js`. Beide Dateien werden mit Sourcemaps generiert, sodass beim Öffnen von `vendor.js` oder `{app-name}.js` zur Suche nach relevantem Code, wenn ein Debugger platziert wird, die Sourcemap geladen wird und der Haltepunkt im prätranspilierten Code gesetzt wird, um eine einfachere Korrelation mit Ihrem Projektcode zu ermöglichen.

Für mehr Informationen zu Sourcemaps, warum sie benötigt werden und was der ember-cli damit macht, lesen Sie den Leitfaden [Erweiterter Einsatz: Asset-Kompilierung](https://cli.emberjs.com/release/advanced-use/asset-compilation/). Beachten Sie, dass Sourcemaps standardmäßig aktiviert sind.

### `ember-data` ist vorinstalliert; brauche ich es?

Überhaupt nicht. Obwohl `ember-data` _die häufigsten Probleme_ löst, mit denen jede App, die mit Daten arbeitet, konfrontiert wird, ist es möglich, Ihren eigenen Front-End-Datenclient zu entwickeln. Eine gängige Alternative zu einem voll ausgestatteten Front-End-Datenclient ist die [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch).

Unter Verwendung der vom Framework bereitgestellten Designmuster würde eine `Route`, die `fetch()` verwendet, wie folgt aussehen:

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

Weitere Informationen zur [Spezifizierung des `Route`-Modells](https://guides.emberjs.com/release/routing/specifying-a-routes-model/) finden Sie hier.

### Warum kann ich nicht einfach JavaScript verwenden?

Dies ist die _häufigste_ Frage, die Ember-Anwender von Leuten hören, die vorher Erfahrungen mit [React](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started) gemacht haben. Obwohl es technisch möglich ist, JSX oder jede andere Form der DOM-Erstellung zu verwenden, gibt es bisher nichts, das so robust ist wie das Templating-System von Ember. Der absichtliche Minimalismus zwingt zu bestimmten Entscheidungen und ermöglicht konsistenteren Code, während die Vorlage strukturierter gehalten wird, anstatt mit maßgeschneiderter Logik gefüllt zu werden.

Siehe auch: [ReactiveConf 2017: Secrets of the Glimmer VM](https://www.youtube.com/watch?v=nXCSloXZ-wc)

### Was ist der Status des `mut`-Helpers?

`mut` wurde in diesem Tutorial nicht behandelt und ist wirklich ein Überbleibsel aus einer Übergangszeit, in der Ember von einer bidirektionalen Datenbindung zu einem gebräuchlicheren und leichter nachvollziehbaren unidirektionalen Datenfluss überging. Es könnte als eine Build-Zeit-Transformation betrachtet werden, die ihr Argument mit einer Setter-Funktion umwickelt.

Konkret ermöglicht die Verwendung von `mut` die Deklaration von nur aus Vorlagen bestehenden Funktionsaufrufen:

```hbs-nolint
<Checkbox
  @value=\{{this.someData}}
  @onToggle=\{{fn (mut this.someData) (not this.someData)}}
/>
```

Ohne `mut` wäre eine Komponentenklasse erforderlich:

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

Die im Template dann wie folgt aufgerufen werden würde:

```hbs-nolint
<Checkbox @data=\{{this.someData}} @onChange=\{{this.setData}} />
```

Aufgrund der Kürze bei der Verwendung von `mut` könnte es wünschenswert sein, darauf zurückzugreifen. `mut` hat jedoch unnatürliche Semantiken und hat im Laufe seines Bestehens viel Verwirrung gestiftet.

Es wurden einige neue Ideen in Form von Addons entwickelt, die die öffentlichen APIs nutzen, [`ember-set-helper`](https://github.com/adopted-ember-addons/ember-set-helper) und [`ember-box`](https://github.com/pzuraq/ember-box). Beide versuchen, die Probleme von `mut` zu lösen, indem sie offensichtlichere/"weniger magische" Konzepte einführen und Build-Zeit-Transformationen und implizites Glimmer-VM-Verhalten vermeiden.

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

Beachten Sie, dass keine dieser Lösungen besonders verbreitet unter den Mitgliedern der Community ist, und insgesamt versuchen die Menschen noch immer, eine ergonomische und einfache API für das Setzen von Daten in einem kontextlosen Template ohne unterstützendes JS zu finden.

### Was ist der Zweck von Controllern?

[Controller](https://guides.emberjs.com/release/routing/controllers/) sind [Singletons](https://en.wikipedia.org/wiki/Singleton_pattern), die dabei helfen können, den Renderkontext der aktiven Route zu verwalten. Auf den ersten Blick funktionieren sie ähnlich wie das unterstützende JavaScript einer Komponente. Controller sind (Stand Januar 2020) der einzige Weg, um URL-Abfrageparameter zu verwalten.

Idealerweise sollten Controller in ihren Aufgaben eher leicht bleiben und, wo möglich, an Komponenten und Services delegieren.

### Was ist der Zweck von Routen?

Eine [Route](https://guides.emberjs.com/release/routing/defining-your-routes/) repräsentiert einen Teil der URL, wenn ein Benutzer von einem Ort zum anderen in der App navigiert. Eine Route hat nur einige wenige Aufgaben:

- Laden der _minimalausreichenden Daten_ zum Rendern der Route (oder des View-Teilbaums).
- Zugriff auf die Route einschränken und bei Bedarf weiterleiten.
- Laden und Fehlerzustände der minimalen erforderlichen Daten behandeln.

Eine Route hat nur 3 Lebenszyklus-Hooks, die alle optional sind:

- `beforeModel` — Zugriff auf die Route einschränken.
- `model` — wo Daten geladen werden.
- `afterModel` — Zugang überprüfen.

Letztlich hat eine Route die Fähigkeit, allgemeine Ereignisse zu behandeln, die sich aus der Konfiguration des `modells` ergeben:

- `loading` — was zu tun ist, wenn der `model`-Hook lädt.
- `error` — wie bei einem Fehler zu verfahren ist, der von `model` geworfen wird.

Sowohl `loading` als auch `error` können Standardvorlagen sowie an anderer Stelle in der Anwendung definierte angepasste Vorlagen rendern, um Lade-/Fehlerzustände zu vereinheitlichen.

Mehr Informationen zu [allem, was eine Route tun kann, finden Sie in der API-Dokumentation](https://api.emberjs.com/ember/release/classes/route/).

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
