---
title: Ember-Ressourcen und Fehlerbehebung
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{LearnSidebar}}
{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Unser letzter Ember-Artikel bietet Ihnen eine Liste von Ressourcen, die Sie für Ihr weiteres Lernen nutzen können, sowie nützliche Hinweise zur Fehlerbehebung und weitere Informationen.

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
          über Kenntnisse der
          <a
            href="/de/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >Terminal/Kommandozeile</a
          >
          verfügen.
        </p>
        <p>
          Ein tieferes Verständnis moderner JavaScript-Funktionen (wie Klassen,
          Module usw.) wird äußerst vorteilhaft sein, da Ember intensiv davon Gebrauch macht.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Bereitstellung weiterführender Ressourcenlinks und Informationen zur Fehlerbehebung.
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

Dies ist bei weitem keine umfassende Liste, sondern eine Liste von Dingen, die zum Zeitpunkt des Schreibens aufgetaucht sind (letztes Update, Mai 2020).

### Wie debugge ich, was im Framework vor sich geht?

Für _framework-spezifische_ Dinge gibt es das [ember-inspector-Add-On](https://guides.emberjs.com/release/ember-inspector/), das die Inspektion folgender Punkte ermöglicht:

- Routen & Controller
- Komponenten
- Dienste
- Zusagen
- Daten (d.h. von einer entfernten API — standardmäßig von ember-data)
- Informationen zu Veralterungen
- Rendering-Leistung

Für allgemeine JavaScript-Fehlerbehebung schauen Sie sich unsere [Leitfäden zur JavaScript-Fehlerbehebung](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html) sowie die Interaktion mit den [anderen Debugging-Tools des Browsers](https://firefox-source-docs.mozilla.org/devtools-user/index.html) an. In jedem Standard-Ember-Projekt gibt es zwei Haupt-JavaScript-Dateien, `vendor.js` und `{app-name}.js`. Beide Dateien werden mit Quellenkarten generiert. Wenn Sie also die `vendor.js` oder `{app-name}.js` öffnen, um nach relevantem Code zu suchen und ein Debugger platziert wird, lädt die Quellenkarte und der Haltepunkt wird im vor-transpilierten Code platziert, um die Korrelation zu Ihrem Projektcode zu erleichtern.

Weitere Informationen zu Quellenkarten, warum sie benötigt werden und was der ember-cli damit macht, finden Sie im [Erweiterten Einsatz: Asset-Kompilierung](https://cli.emberjs.com/release/advanced-use/asset-compilation/)-Leitfaden. Beachten Sie, dass Quellenkarten standardmäßig aktiviert sind.

### `ember-data` ist vorinstalliert; brauche ich es?

Überhaupt nicht. Während `ember-data` _die häufigsten Probleme_ löst, auf die jede App stößt, die mit Daten zu tun hat, ist es möglich, Ihren eigenen Frontend-Datenclient zu erstellen. Eine häufige Alternative zu jedem voll ausgestatteten Frontend-Datenclient ist [The Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch).

Unter Verwendung der vom Framework bereitgestellten Designmuster würde eine `Route` mit `fetch()` etwa so aussehen:

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

Dies ist die _häufigste_ Frage, die Ember-Leute von Personen hören, die vorherige Erfahrungen mit [React](/de/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started) haben. Während es technisch möglich ist, JSX oder jede andere Form der DOM-Erstellung zu verwenden, gibt es noch nichts so Robustes wie das Templating-System von Ember. Der absichtliche Minimalismus erzwingt bestimmte Entscheidungen und führt zu konsistenterem Code, während die Vorlage eher strukturell bleibt, anstatt mit maßgeschneiderter Logik gefüllt zu sein.

Siehe auch: [ReactiveConf 2017: Secrets of the Glimmer VM](https://www.youtube.com/watch?v=nXCSloXZ-wc)

### Was ist der Zustand des `mut`-Helpers?

`mut` wurde in diesem Tutorial nicht behandelt und ist wirklich ein Überbleibsel aus einer Übergangszeit, als Ember von zweiwegegebundenen Daten zu dem gängigeren und leichter verständlichen einwegegebundenen Datenfluss wechselte. Es könnte als eine Kompilierungszeit-Transformation angesehen werden, die ihr Argument mit einer Setter-Funktion umhüllt.

Konkret ausgedrückt, erlaubt `mut` die Deklaration von rein funktionsbasierten Template-Einstellungen:

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

Die dann im Template wie folgt aufgerufen würde:

```hbs-nolint
<Checkbox @data=\{{this.someData}} @onChange=\{{this.setData}} />
```

Aufgrund der Kürze der Nutzung von `mut` könnte es verlockend sein, darauf zurückzugreifen. Allerdings hat `mut` unnatürliche Semantiken und hat über sein Bestehen hinweg viel Verwirrung gestiftet.

Es gibt ein paar neue Ideen in Form von Addons, die die öffentlichen APIs nutzen, [`ember-set-helper`](https://github.com/adopted-ember-addons/ember-set-helper) und [`ember-box`](https://github.com/pzuraq/ember-box). Beide versuchen, die Probleme von `mut` zu lösen, indem sie offensichtlichere / "weniger magische" Konzepte einführen, um Kompilierungszeit-Transformationen und implizites Verhalten des Glimmer VM zu vermeiden.

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

Beachten Sie, dass keine dieser Lösungen besonders häufig unter Mitgliedern der Community ist und insgesamt immer noch versucht wird, eine ergonomische und einfache API für das Setzen von Daten in einem rein auf Templates basierenden Kontext ohne unterstützendes JS zu finden.

### Was ist der Zweck von Controllern?

[Controller](https://guides.emberjs.com/release/routing/controllers/) sind [Singletons](https://en.wikipedia.org/wiki/Singleton_pattern), die möglicherweise den Rendering-Kontext der aktiven Route verwalten helfen. An der Oberfläche funktionieren sie ähnlich wie das unterstützende JavaScript einer Komponente. Controller sind (ab Januar 2020) die einzige Möglichkeit, URL-Query-Parameter zu verwalten.

Idealerweise sollten Controller in ihren Verantwortlichkeiten recht leicht bleiben und, wo möglich, an Komponenten und Dienste delegieren.

### Was ist der Zweck von Routen?

Eine [Route](https://guides.emberjs.com/release/routing/defining-your-routes/) repräsentiert einen Teil der URL, wenn ein Benutzer von einem Ort zum anderen in der App navigiert. Eine Route hat nur einige wenige Verantwortlichkeiten:

- Laden der _minimal erforderlichen Daten_, um die Route (oder den View-Subtree) darzustellen.
- Zugang zur Route gewähren und bei Bedarf umleiten.
- Umgang mit Lade- und Fehlerzuständen aus den minimal erforderlichen Daten.

Eine Route hat nur 3 Lebenszyklus-Hooks, von denen alle optional sind:

- `beforeModel` — Zugang zur Route gewähren.
- `model` — wo Daten geladen werden.
- `afterModel` — Zugang überprüfen.

Zuletzt hat eine Route die Möglichkeit, auf allgemeine Ereignisse zu reagieren, die sich aus der Konfiguration des `model` ergeben:

- `loading` — was zu tun ist, wenn der `model`-Hook lädt.
- `error` — was zu tun ist, wenn ein Fehler im `model` geworfen wird.

Sowohl `loading` als auch `error` können Standardvorlagen als auch benutzerdefinierte Vorlagen rendern, die anderswo in der Anwendung definiert sind, sodass Lade- und Fehlerzustände vereinheitlicht werden.

Weitere Informationen darüber, [was eine Route alles kann, finden Sie in der API-Dokumentation](https://api.emberjs.com/ember/release/classes/route/).

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
