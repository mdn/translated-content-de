---
title: Seitenleisten
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: 0ff7ba5177bf2e66214bd90b58590c6bf3acb758
---

Alle MDN-Seiten sollten Seitenleisten haben. Die meisten werden mit einem System erstellt, das Datenstrukturen in YAML-Dateien definiert und Seitenleisten über Front Matter oder ein Makro auf den Seiten einfügt.

In diesem Leitfaden erfahren Sie, wie diese Seitenleisten funktionieren, sodass Sie bestehende Seitenleisten bearbeiten und neue nach Bedarf erstellen können.

> [!NOTE]
> Wenn Sie Seitenleisten bearbeiten, können Sie die folgenden `npm run content`-Befehle verwenden:
>
> - Führen Sie `npm run content -- fmt-sidebars` aus, um Seitenleisten zu formatieren.
> - Führen Sie `npm run content -- sync-sidebars` aus, um mit Weiterleitungen zu synchronisieren.

## Wie Seitenleisten funktionieren

Jede Seitenleiste hat eine entsprechende YAML-Datei, die sich im `content`-Repo von MDN im Verzeichnis [`files/sidebars`](https://github.com/mdn/content/tree/main/files/sidebars) befindet. Diese definiert die hierarchische Struktur der Seitenleisten-Links, die URLs, zu denen jeder Link führen soll, und optionale benutzerdefinierte Überschriften/Linktexte, die bei Bedarf in verschiedene Sprachen lokalisiert werden können.

Die Seite, die Sie gerade lesen, hat eine Seitenleiste, die in der Datei [`mdnsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml) definiert ist.

Die Seitenleiste wird auf der aktuellen Seite (und allen anderen im selben Dokumentbaum) angezeigt, indem ein `sidebar`-Eintrag in der [Dokumentenquelle](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/mdn/writing_guidelines/page_structures/sidebars/index.md) eingefügt wird:

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

All MDN pages should have sidebars.
```

Der Front Matter ist der Inhalt zwischen den Strichen. Wenn `sidebar: mdnsidebar` im Front Matter enthalten ist, sucht das System nach einer YAML-Datei mit demselben Namen im Verzeichnis `files/sidebars`. Wenn eine gefunden wird, übernimmt es automatisch die Anzeige der Seitenleiste und platziert sie auf der Seite als eine oder mehrere geordnete Listen ({{htmlelement("ol")}}-Elemente).

Versuchen Sie, in der Seitenleiste zu navigieren, bevor Sie zu dieser Seite zurückkehren. Ihnen wird auffallen, dass beim Navigieren zu einer Seite normalerweise die Linkliste für den Abschnitt, in dem Sie sich gerade befinden, erweitert wird, während die anderen eingeklappt bleiben und die Seite, auf der Sie sich befinden, hervorgehoben wird.

## YAML-Syntax für Seitenleisten erklärt

Dieser Abschnitt erklärt die verschiedenen Funktionen, die in MDN-Seitenleisten enthalten sein können, und die YAML-Syntax, die verwendet wird, um jede zu erstellen. Überprüfen Sie beim Durcharbeiten dieser Dokumentation die Merkmale anhand der [bestehenden YAML-Seitenleisten](https://github.com/mdn/content/tree/main/files/sidebars).

### Beginn einer Seitenleistendefinition

Der Beginn jeder YAML-Seitenleistendaten-Definition ist ein `sidebar`-Schlüssel, dessen Wert eine Liste ist, die die Seitenleistendaten definiert:

```yaml
sidebar:
  # sidebar definition goes here
```

### Einzelne Links

Um einen einzelnen Link in einer Seitenleiste zu erstellen, fügen Sie ein YAML-Listenpunkt mit einer relativen URL ein:

```yaml
sidebar:
  - /MDN/Writing_guidelines/Page_structures/Sidebars
```

Die URL ist relativ zum `docs`-Verzeichnis in der MDN-URL-Struktur, sodass zum Beispiel `/MDN/Writing_guidelines/Page_structures/Sidebars` einen Link zur aktuellen Seite erstellen würde. Das System verwendet automatisch den Dokumententitel der verlinkten Seite als Linktext.
Wenn die Seite einen `short-title`-Schlüssel im Front Matter hat, wird dieser für die Anzeige des Links in der Seitenleiste verwendet.

Wenn Sie benutzerdefinierten Linktext verwenden möchten, der nicht `title` oder `short-title` eines Dokuments ist, müssen Sie zwei Schlüssel innerhalb des Listenelements einfügen — `title`, der den benutzerdefinierten Linktext enthält, und `link`, der die relative URL wie zuvor enthält. Das folgende Beispiel würde wie zuvor einen Link zur aktuellen Seite erstellen, jedoch mit dem benutzerdefinierten Linktext "Writing sidebars":

```yaml
sidebar:
  - title: Writing sidebars
    link: /MDN/Writing_guidelines/Page_structures/Sidebars
```

### Abschnittstitel

Ein Abschnittstitel ist ein Seitenelement, das in einer größeren Schriftgröße als normale Seitenelemente angezeigt wird. Dies wird häufig als Titel oben in einer Seitenleiste verwendet, die zur Übersichtsseite für diesen Abschnitt der Dokumente führt, oder als Abschnittstrenner im Falle besonders großer Seitenleisten (wie im Abschnitt [Lernen Sie Webentwicklung](/de/docs/Learn_web_development) zu sehen).

Ein Abschnittstitel wird definiert, indem ein `type`-Schlüssel mit einem Wert von `section` im Listenpunkt eingefügt wird. Zum Beispiel:

```yaml
sidebar:
  - type: section
    link: /MDN
```

Ein Abschnittstitel kann benutzerdefinierten Linktext spezifiziert haben:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
    link: /MDN
```

Oder Sie können den `link`-Schlüssel weglassen, um nur ein Textelement zu rendern, das keinen Link enthält:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
```

### Erstellen einer erweiterten/eingeklappten Liste von Links

Um eine erweiterte/eingeklappte Liste von Links zu erstellen, erstellen Sie einen Listenpunkt wie zuvor, jedoch mit einem `children`-Schlüssel, dessen Wert eine Liste der Links ist, die Sie als untergeordnete Listenpunkte unter dem übergeordneten Element anzeigen möchten. Jeder untergeordnete Listenpunkt hat die gleiche Syntax wie der übergeordnete. Ein untergeordneter Listenpunkt kann sogar eigene `children` enthalten und ermöglicht somit die Erstellung mehrerer Hierarchieebenen. Hier ist ein Beispiel:

```yaml
sidebar:
  - title: community_guidelines
    details: closed
    children:
      - /MDN/Community
      - title: contributing_to_mdn_web_docs
        details: closed
        children:
          - /MDN/Community
          - /MDN/Community/Getting_started
      - /MDN/Community/Open_source_etiquette
      - /MDN/Community/Communication_channels
      - /MDN/Community/Discussions
# etc.
```

Beachten Sie auch den `details`-Schlüssel — dieser steuert, ob die Liste der untergeordneten Elemente eines Listenpunkts beim ersten Laden der Seite geschlossen oder geöffnet angezeigt wird. Mögliche Werte sind:

- `closed`: Die untergeordneten Elemente werden geschlossen angezeigt, es sei denn, die aktuelle Seite ist durch eines der untergeordneten Elemente verlinkt, in diesem Fall werden sie geöffnet angezeigt.
- `open`: Die untergeordneten Elemente werden immer geöffnet angezeigt.

Wenn ein Listenpunkt `children` und `details` spezifiziert hat, wird er mit einer {{htmlelement("details")}}/{{htmlelement("summary")}}-Elementstruktur innerhalb davon angezeigt, die die untergeordnete Liste enthält, die dann durch Klicken auf das Offenlegungsdreieck-Widget oder durch Fokussieren der Zusammenfassung und Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd> erweitert/zusammengeklappt werden kann.

### Automatisches Rendern einer Unterseitenliste

Wenn Sie eine Liste erstellen möchten, die Links zu den Unterseiten einer bestimmten Seite enthält, können Sie dies erzeugen, indem Sie ein Listenpunkt mit einem `type`-Schlüssel von Wert `listSubPages` und einem `path`-Schlüssel angeben, dessen Wert der Pfad zu der Seite ist, deren Unterseiten Sie verlinken möchten. Zum Beispiel sieht die gesamte Definition der [Glossar](/de/docs/Glossary)-Seitenleiste (siehe [`glossarysidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml)) so aus:

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glossary
  - type: listSubPages
    path: /Glossary
```

Dies rendert eine Seitenleiste mit einem Abschnittstitel, der zurück zur Übersichtsseite des Glossars verlinkt, und einer Liste der obersten Ebene mit Links zu allen Glossarunterseiten.

Wenn Sie dies als übergeordneten Listenpunkt rendern möchten, wobei die Unterseiten als erweiterte/eingeklappte untergeordnete Liste erscheinen sollen, müssen Sie zusätzlich einen `title`-Schlüssel angeben, der den anzuzeigenden Text für das übergeordnete Element spezifiziert, und einen `details`-Schlüssel, der das Öffnen/Schließen-Verhalten der `<details>`/`<summary>`-Struktur spezifiziert.

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glossary
    details: closed
```

#### Gruppieren von Unterseitenlisten

Es gibt auch einen `type`-Wert von `listSubPagesGrouped`. Dies bewirkt, dass alle Unterseiten mit Titeln, die mit demselben Präfix gefolgt von einem Bindestrich beginnen (zum Beispiel `item-`), in einer untergeordneten Liste unter einem Listenpunkt mit dem Präfix, einem Bindestrich und einem Sternchen (zum Beispiel `item-*`) enthalten sind.

Beispielsweise enthält das MDN-Glossar zum Zeitpunkt der Erstellung drei CORS-bezogene Seiten:

- CORS
- CORS-safelisted request header
- CORS-safelisted response header

Wenn wir die Definition der Glossar-Seitenleiste auf Folgendes aktualisieren würden:

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glossary
    details: closed
```

Wären die Links zu diesen Seiten in einer untergeordneten Listenstruktur wie folgt gruppiert:

- CORS-\*
  - CORS
  - CORS-safelisted request header
  - CORS-safelisted response header

Realistischere Beispiele finden sich in der [CSS](/de/docs/Web/CSS)-Seitenleistendefinition (siehe [`cssref.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml)), wo `listSubPagesGrouped` verwendet wird, um Links von verwandten Kurz- und Langform-Eigenschaften zu gruppieren. Der Listenpunkt, der das Eigenschaften-Seitenleistenmenü erzeugt, sieht so aus:

```yaml
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
```

Diese Listenpunkt-Definition enthält auch `tags`, was das Thema des nächsten Abschnitts ist.

#### Filtern von Unterseitenlisten

Wenn Sie mehrere verschiedene Seitentypen im selben Verzeichnis haben (wie durch den `page-type`-Schlüssel im Front Matter der Seite spezifiziert), können Sie die durch `listSubPages` und `listSubPagesGrouped` generierten Listenpunkte nach Seitentyp filtern. Dafür fügen Sie einen `tags`-Schlüssel innerhalb des Listenpunktes ein, dessen Wert ein einzelner Seitentyp oder eine Liste der Seitentypen ist, die Sie in den generierten Listenelementen aufnehmen möchten. Die CSS-Seitenleiste enthält mehrere solcher Beispiele:

```yaml
- type: listSubPages
  path: /Web/CSS
  title: Modules
  tags: css-module
  details: closed
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Selectors
  tags: css-selector
  details: closed
# etc.
```

### Lokalisieren von Textzeichenketten

Wie oben erklärt, können Sie benutzerdefinierten Text einfügen, um Ihren Linktext oder Abschnittstitel in einem `title`-Schlüssel zu füllen. Wenn Sie diesen Text in mehrere Sprachen lokalisiert haben möchten, können Sie in den `title`-Schlüssel einen Platzhalter einfügen und anschließend die Definitionen, was dieser Platzhalter in verschiedenen Sprachen sein soll, in einem `l10n`-Dictionary am Ende der YAML-Datei einfügen.

Schauen wir uns ein Beispiel an, um zu zeigen, wie das aussieht. In der [HTML](/de/docs/Web/HTML)-Seitenleiste (siehe [`htmlsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml)) definieren wir ein Listenpunkt, das eine Liste von Links zu allen {{htmlelement("input")}}-Typreferenzseiten erzeugt. Der Elternlistenpunkttext wird im `title`-Schlüssel als Platzhalter `Input_types` definiert:

```yaml
- type: listSubPages
  path: /Web/HTML/Reference/Elements/input
  title: Input_types
  details: closed
  code: true
```

Am Ende der Datei definieren wir das `l10n`-Dictionary. Jeder Schlüssel innerhalb `l10n` repräsentiert ein anderes Locale — `en-US`, `fr`, `ja` usw. Der Wert jedes dieser Schlüssel ist ein Unter-Dictionary, dessen Schlüssel die im Listenpunkt definierten Platzhalter sind. Jeder Schlüsselwert ist der Wert dieses Platzhalters im jeweiligen Locale.

Zum Beispiel:

```yaml
l10n:
  en-US:
    Input_types: <code>&lt;input&gt;</code> types
  fr:
    Input_types: Types <code>&lt;input&gt;</code>
  ja:
    Input_types: <code>&lt;input&gt;</code> 型
  ko:
    Input_types: <code>&lt;input&gt;</code> types
  pt-BR:
    Input_types: Tipos de <code>&lt;input&gt;</code>
  ru:
    Input_types: Типы <code>&lt;input&gt;</code>
  zh-CN:
    Input_types: <code>&lt;input&gt;</code> 类型
```

Wir haben nur die `Input_types`-Werte in jedem Locale zur Kürze beigefügt.

Wenn die Seitenleiste gerendert wird, ersetzt das System den Text `Input_types` durch seinen definierten Wert in der jeweiligen Locale-Version der Site, die aufgerufen wird. Vergleichen Sie zum Beispiel die folgenden:

- https://developer.mozilla.org/de/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

Wenn auf ein MDN-Locale zugegriffen wird, das keinen definierten Wert für einen bestimmten Platzhalter hat, wird standardmäßig die `en-US`-Version verwendet. Wenn keine `en-US`-Version definiert ist, wird der wörtliche Platzhaltertext angezeigt (was in diesem Fall `Input_types` wäre).

## Einzigartige Seitenleisten

Auf MDN gibt es einige Seitenleisten, die das oben beschriebene Standardsystem nicht verwenden. Dies sind komplexere Makros, die einer speziellen Behandlung bedürfen:

- `\{{APIRef("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Referenzseiten](/de/docs/Web/API#interfaces) angezeigt wird. Für jede Schnittstelle generiert das Makro automatisch Links zu Mitgliedern, die auf der Schnittstelle definiert sind — Eigenschaften, Methoden, Ereignisse usw. Der einzelne Parameter ist der Name der relevanten API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die am Ende der Seitenleiste angezeigten verwandten Seiten zu bearbeiten, bearbeiten Sie den Eintrag in der API-GroupData.
- `\{{DefaultAPISidebar("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Landingpages](/de/docs/Web/API#specifications) angezeigt wird. Der einzelne Parameter ist der Name der relevanten API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die in einer bestimmten API-Seitenleiste verlinkten Leitfäden, Schnittstellen usw. zu bearbeiten, bearbeiten Sie den Eintrag in der API-GroupData.
- `sidebar: jsref`
  - : Die Seitenleiste auf [JavaScript-Referenzseiten](/de/docs/Web/JavaScript/Reference), die über Front Matter eingefügt ist.
    Der Inhalt von `jsref` ist in rari in [`jsref.rs`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/sidebars/jsref.rs) definiert.

Wenn Sie denken, dass eine dieser aktualisiert werden sollte, kontaktieren Sie uns über die [üblichen Kanäle](/de/docs/MDN/Community/Communication_channels).

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Inhalts-Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Seitenabschnitts-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Banner- und Hinweis-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
