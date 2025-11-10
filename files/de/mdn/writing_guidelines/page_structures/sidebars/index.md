---
title: Seitenleisten
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Alle MDN-Seiten sollten Seitenleisten haben.
Die meisten von ihnen werden mit einem System erstellt, das Datenstrukturen in YAML-Dateien definiert und Seitenleisten über Front Matter oder ein Makro auf Seiten einfügt.

In diesem Leitfaden erfahren Sie, wie diese Seitenleisten funktionieren, damit Sie bestehende Seitenleisten bearbeiten und bei Bedarf neue erstellen können.

> [!NOTE]
> Wenn Sie Seitenleisten bearbeiten, können Sie `yarn tool`-Befehle für die Formatierung und Synchronisierung mit Weiterleitungen verwenden.
> Weitere Informationen finden Sie in der Dokumentation zu [Yaris CLI-Tool](https://github.com/mdn/yari/blob/main/docs/cli-tool.md).

## Funktionsweise von Seitenleisten

Jede Seitenleiste hat eine entsprechende YAML-Datei im `content`-Repo von MDN im Verzeichnis [`files/sidebars`](https://github.com/mdn/content/tree/main/files/sidebars). Diese definiert die hierarchische Struktur der Seitenleisten-Links, die URLs, auf die jeder Link verweisen soll, und optional benutzerdefinierten Überschriften/Linktext, der bei Bedarf in verschiedene Sprachen lokalisiert werden kann.

Die Seite, die Sie gerade lesen, hat eine Seitenleiste definiert in der Datei [`mdnsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml).

Die Seitenleiste wird auf der aktuellen Seite (und allen anderen im selben Dokumentbaum) gerendert, indem ein `sidebar`-Eintrag in den [Dokumentenquellen](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/mdn/writing_guidelines/page_structures/sidebars/index.md) eingetragen wird:

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

All MDN pages should have sidebars.
```

Der Front Matter ist der Inhalt zwischen den Strichen. Wenn Sie `sidebar: mdnsidebar` im Front Matter einfügen, sucht das System nach einer YAML-Datei mit demselben Namen im Verzeichnis `files/sidebars`. Falls es eine findet, kümmert es sich automatisch um das Rendern der Seitenleiste und das Platzieren auf der Seite als eine oder mehrere geordnete Listen ({{htmlelement("ol")}}-Elemente).

Versuchen Sie, durch die Seitenleiste zu navigieren, bevor Sie zu dieser Seite zurückkehren. Sie werden feststellen, dass beim Navigieren zu einer Seite die Linkliste für den Abschnitt, in dem Sie sich aktuell befinden, in der Regel erweitert wird, während die anderen minimiert werden und die Seite, auf der Sie sich befinden, hervorgehoben wird.

## Erläuterung der YAML-Syntax für Seitenleisten

In diesem Abschnitt werden die verschiedenen Funktionen erklärt, die in MDN-Seitenleisten enthalten sein können, und die YAML-Syntax, die zur Erstellung jeder Funktion verwendet wird. Prüfen Sie beim Durcharbeiten dieser Dokumentation die Funktionen gegenüber den [bestehenden Seitenleisten-YAMLs](https://github.com/mdn/content/tree/main/files/sidebars).

### Beginn einer Seitenleistendefinition

Der Beginn jeder YAML-Seitenleistendaten-Definition ist ein `sidebar`-Schlüssel, dessen Wert eine Liste ist, die die Seitenleistendaten definiert:

```yaml
sidebar:
  # sidebar definition goes here
```

### Einzelne Links

Um einen einzelnen Link in einer Seitenleiste zu erstellen, fügen Sie einen YAML-Listeneintrag ein, der eine relative URL enthält:

```yaml
sidebar:
  - /MDN/Writing_guidelines/Page_structures/Sidebars
```

Die URL ist relativ zum `docs`-Verzeichnis in der MDN-URL-Struktur, sodass beispielsweise `/MDN/Writing_guidelines/Page_structures/Sidebars` einen Link zur aktuellen Seite erzeugen würde. Das System verwendet automatisch den Dokumenttitel der verlinkten Seite als Linktext.
Wenn die Seite einen `short-title`-Schlüssel im Front Matter hat, wird dieser stattdessen für den Anzeigenamen des Seitenleisten-Links verwendet.

Wenn Sie benutzerdefinierten Linktext verwenden möchten, der weder der `title` noch der `short-title` eines Dokuments ist, müssen Sie zwei Schlüssel im Listenelement hinzufügen — `title`, das den benutzerdefinierten Linktext enthält, und `link`, das wie zuvor die relative URL enthält. Das folgende Beispiel würde einen Link zur aktuellen Seite wie zuvor erstellen, aber mit dem benutzerdefinierten Linktext "Seitenleisten schreiben":

```yaml
sidebar:
  - title: Writing sidebars
    link: /MDN/Writing_guidelines/Page_structures/Sidebars
```

### Abschnittstitel

Ein Abschnittstitel ist ein Seitenleisten-Eintrag, der in einer größeren Schriftgröße als normale Seitenleisten-Einträge gerendert wird. Dies wird häufig als Titel oben in einer Seitenleiste verwendet, der zur Einstiegsseite für diesen Abschnitt von Dokumenten verlinkt, oder als Abschnittstrenner bei besonders großen Seitenleisten (wie im [Lernen-Web-Entwicklung-Abschnitt](/de/docs/Learn_web_development)).

Ein Abschnittstitel wird definiert, indem Sie im Listenelement einen `type`-Schlüssel mit dem Wert `section` einfügen. Zum Beispiel:

```yaml
sidebar:
  - type: section
    link: /MDN
```

Ein Abschnittstitel kann benutzerdefinierten Linktext haben:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
    link: /MDN
```

Alternativ können Sie den `link`-Schlüssel weglassen, um nur ein Textelement zu rendern, das keinen Link enthält:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
```

### Erstellen von aufklappbaren Listen von Links

Um eine aufklappbare Liste von Links zu erstellen, erstellen Sie ein Listenelement wie zuvor, fügen jedoch einen `children`-Schlüssel ein, dessen Wert eine Liste ist, die die Links enthält, die Sie als untergeordnete Listenelemente unter dem übergeordneten Element anzeigen möchten. Jedes untergeordnete Listenelement hat dieselbe Syntax wie das übergeordnete. Ein untergeordnetes Listenelement kann sogar seine eigenen `children` enthalten, sodass Sie mehrere Hierarchieebenen erstellen können. Hier ist ein Beispiel:

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

Beachten Sie auch den `details`-Schlüssel — dieser steuert, ob die Liste der Kinder eines Listenelements beim ersten Laden der Seite geschlossen oder geöffnet angezeigt wird. Die möglichen Werte sind:

- `closed`: Die Kinder werden geschlossen angezeigt, es sei denn, die aktuelle Seite wird von einem der Kinder verlinkt, in diesem Fall werden sie geöffnet angezeigt.
- `open`: Die Kinder werden immer geöffnet angezeigt.

Wenn ein Listenelement `children` und `details` angegeben hat, wird es mit einer {{htmlelement("details")}}/{{htmlelement("summary")}}-Elementstruktur gerendert, die die untergeordnete Liste enthält, welche dann durch Klicken auf das Offenlegungssymbol oder durch Fokussieren der Zusammenfassung und Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd> ein- oder ausgeklappt werden kann.

### Automatisches Rendern einer Unterseitenliste

Wenn Sie eine Liste erstellen möchten, die Links zu den Unterseiten einer bestimmten Seite enthält, können Sie dies erzeugen, indem Sie ein Listenelement mit einem `type`-Schlüssel des Werts `listSubPages` und einem `path`-Schlüssel angeben, dessen Wert der Pfad zu der Seite ist, deren Unterseiten Sie verlinken möchten. Zum Beispiel sieht die gesamte [Glossar](/de/docs/Glossary) Seitenleistendefinition (siehe [`glossarysidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml)) so aus:

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glossary
  - type: listSubPages
    path: /Glossary
```

Dies rendert eine Seitenleiste mit einem Abschnittstitel, der zurück zur Einstiegsseite des Glossars verlinkt, und einer Liste mit Links zu allen untergeordneten Glossar-Seiten.

Wenn Sie dies als übergeordnetes Listenelement rendern möchten, bei dem die Unterseiten als aufklappbare untergeordnete Liste angezeigt werden, müssen Sie zusätzlich einen `title`-Schlüssel angeben, der den Text für das übergeordnete Element angibt, und einen `details`-Schlüssel, der das Öffnen/Schließen-Verhalten der `<details>`/`<summary>`-Struktur angibt.

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glossary
    details: closed
```

#### Gruppieren von Listenunterseiten

Es gibt auch einen `type`-Wert von `listSubPagesGrouped`. Dies bewirkt, dass alle untergeordneten Seiten mit Titeln, die mit demselben Präfix und einem Bindestrich beginnen (zum Beispiel `item-`), in einer untergeordneten Liste unter einem Listenelement des Präfixes, plus einem Bindestrich und einem Sternchen (zum Beispiel `item-*`) aufgenommen werden.

Beispielsweise enthält das MDN-Glossar zum Zeitpunkt des Schreibens drei CORS-bezogene Seiten:

- CORS
- CORS-safelisted request header
- CORS-safelisted response header

Wenn wir die Glossar-Seitenleistendefinition folgendermaßen aktualisieren würden:

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glossary
    details: closed
```

Wären die Links zu diesen Seiten in eine untergeordnete Listenstruktur wie folgt gruppiert:

- CORS-\*
  - CORS
  - CORS-safelisted request header
  - CORS-safelisted response header

Realistischere Beispiele finden Sie in der [CSS](/de/docs/Web/CSS) Seitenleistendefinition (siehe [`cssref.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml)), wo `listSubPagesGrouped` verwendet wird, um Links zu verwandten Kurz- und Langformeigenschaften zu gruppieren. Das Listenelement, das das Eigenschaften-Menü der Seitenleiste erzeugt, sieht so aus:

```yaml
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
```

Dieses Listenelement enthält auch `tags`, das Thema des nächsten Abschnitts.

#### Filtern von Listenunterseiten

Wenn Sie in einem Verzeichnis (wie durch den `page-type`-Schlüssel im Front Matter der Seite angegeben) mehrere verschiedene Seitentypen haben, können Sie die von `listSubPages` und `listSubPagesGrouped` generierten Listenelemente nach Seitentyp filtern. Um dies zu tun, fügen Sie einen `tags`-Schlüssel in das Listenelement ein, dessen Wert ein einzelner Seitentyp oder eine Liste der Seitentypen ist, die Sie in den generierten Listenelementen aufnehmen möchten. Die CSS-Seitenleiste enthält mehrere solche Beispiele:

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

### Lokalisierung von Textzeichenfolgen

Wie wir oben erklärt haben, können Sie benutzerdefinierten Text einfügen, um Ihren Linktext oder Abschnittstitel in einem `title`-Schlüssel zu füllen. Wenn Sie diesen Text in mehrere Sprachen lokalisieren möchten, können Sie einen Platzhalter in den `title`-Schlüssel einfügen und dann am Ende der YAML-Datei ein `l10n`-Wörterbuch mit den Definitionen, was dieser Platzhalter in verschiedenen Sprachen sein sollte, einfügen.

Sehen wir uns ein Beispiel an, um zu zeigen, wie das aussieht. In der [HTML](/de/docs/Web/HTML) Seitenleiste (siehe [`htmlsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml)), definieren wir ein Listenelement, das eine Liste von Links zu allen {{htmlelement("input")}} Typreferenzseiten erzeugt. Der übergeordnete Listenelementtext ist im `title`-Schlüssel als Platzhalter von `Input_types` definiert:

```yaml
- type: listSubPages
  path: /Web/HTML/Reference/Elements/input
  title: Input_types
  details: closed
  code: true
```

Am Ende der Datei definieren wir das `l10n`-Wörterbuch. Jeder Schlüssel innerhalb von `l10n` stellt eine andere Sprachversion dar — `en-US`, `fr`, `ja` usw. Der Wert jedes dieser Schlüssel ist ein Unter-Wörterbuch, dessen Schlüssel die in den Listenelementdefinitionen definierten Platzhalter sind. Jeder Schlüsselwert ist der Wert dieses Platzhalters in der jeweiligen Sprachversion.

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

Wir haben nur die `Input_types`-Werte in jeder Sprachversion aus Gründen der Kürze eingeschlossen.

Wenn die Seitenleiste gerendert wird, ersetzt das System den `Input_types`-Text durch seinen definierten Wert in der jeweiligen Sprachversion der Seite, auf die zugegriffen wird. Vergleichen Sie zum Beispiel die folgenden:

- https://developer.mozilla.org/de/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

Wenn auf eine MDN-Sprachversion zugegriffen wird, die keinen definierten Wert für einen bestimmten Platzhalter hat, wird auf die `en-US`-Version zurückgegriffen. Wenn keine `en-US`-Version definiert ist, wird der tatsächliche Platzhaltertext angezeigt (was im obigen Fall `Input_types` wäre).

## Einzigartige Seitenleisten

Es gibt einige Seitenleisten auf MDN, die nicht das oben beschriebene Standardsystem verwenden. Hierbei handelt es sich um komplexere Makros, die besondere Behandlung erfordern:

- `\{{APIRef("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Referenzseiten](/de/docs/Web/API#interfaces) angezeigt wird. Für jede Schnittstelle generiert das Makro automatisch Links zu den auf der Schnittstelle definierten Mitgliedern — Eigenschaften, Methoden, Ereignisse usw. Der einzelne Parameter ist der Name der relevanten API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die verwandten Seiten zu bearbeiten, die unten in der Seitenleiste angezeigt werden, bearbeiten Sie den GroupData-Eintrag dieser API.
- `\{{DefaultAPISidebar("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Einstiegsseiten](/de/docs/Web/API#specifications) angezeigt wird. Der einzelne Parameter ist der Name der relevanten API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die Leitfäden, Schnittstellen usw. zu bearbeiten, die in der Seitenleiste einer bestimmten API verlinkt sind, bearbeiten Sie den GroupData-Eintrag dieser API.
- `sidebar: jsref`
  - : Die Seitenleiste auf [JavaScript-Referenzseiten](/de/docs/Web/JavaScript/Reference), die über Front Matter eingefügt wird.
    Die `jsref`-Inhalte sind in rari in [`jsref.rs`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/sidebars/jsref.rs) definiert.

Wenn Sie der Meinung sind, dass eine dieser Seitenleisten aktualisiert werden sollte, nehmen Sie über die [üblichen Kanäle](/de/docs/MDN/Community/Communication_channels) Kontakt mit uns auf.

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Content-Link-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Seitenabschnitts-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Banner und Hinweis-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
