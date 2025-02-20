---
title: Seitenleisten
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

MDN-Seiten enthalten alle Seitenleisten. Die meisten davon werden mit einem Standardsystem erstellt, das Datenstrukturen in YAML-Dateien definiert und Seitenleisten mithilfe von Makroaufrufen auf Seiten einfügt.

In diesem Leitfaden lernen Sie, wie diese Seitenleisten funktionieren, damit Sie bestehende Seitenleisten bearbeiten und neue erstellen können, falls erforderlich. Außerdem erläutern wir jene Seitenleisten, die das Standardsystem noch nicht verwenden.

> [!NOTE]
> Wenn Sie Seitenleisten bearbeiten, können Sie `yarn tool`-Befehle für die Formatierung und die Synchronisierung mit Weiterleitungen verwenden.
> Informationen dazu finden Sie in der Dokumentation zu [Yari's CLI Tool](https://github.com/mdn/yari/blob/main/docs/cli-tool.md).

## Funktionsweise der Seitenleisten

Jede Seitenleiste hat eine entsprechende YAML-Datei, die sich im Verzeichnis [`files/sidebars`](https://github.com/mdn/content/tree/main/files/sidebars) des MDN-`content`-Repositorys befindet. Diese definiert die hierarchische Struktur der Links in der Seitenleiste, die URLs, auf die jeder Link verweisen soll, und optional benutzerdefinierte Überschriften-/Linktexte, die bei Bedarf in verschiedene Sprachen lokalisiert werden können.

Betrachten wir beispielsweise die Seite, die Sie gerade anzeigen, so ist die Struktur der Seitenleiste in der Datei [`mdnsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml) definiert.

Die Seitenleiste wird auf der aktuellen Seite (sowie auf allen anderen Seiten im selben Dokumentbaum) angezeigt, indem ein entsprechender Makroaufruf — `\{{MDNSidebar}}` — direkt unterhalb des Frontmatters im [Quelltext der Seite](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/mdn/writing_guidelines/page_structures/sidebars/index.md) eingefügt wird:

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
---

\{{MDNSidebar}}
```

Der Frontmatter ist der Inhalt zwischen den Bindestrichen. Das Einfügen des Makroaufrufs `\{{MDNSidebar}}` im Quelltext veranlasst das System, nach einer YAML-Datei mit demselben Namen innerhalb des Verzeichnisses `files/sidebars` zu suchen. Wenn eine solche Datei gefunden wird, kümmert sich das System automatisch um das Rendern der Seitenleiste und deren Platzierung auf der Seite als eine oder mehrere geordnete Listen ({{htmlelement("ol")}}-Elemente).

Versuchen Sie, in der Seitenleiste zu navigieren, bevor Sie zu dieser Seite zurückkehren. Ihnen wird auffallen, dass beim Navigieren zu einer Seite in der Regel die Linkliste des aktuellen Bereichs erweitert wird, während die anderen Bereiche zusammengeklappt bleiben, und die derzeit angezeigte Seite hervorgehoben wird.

## Beispiele für standardisierte Seitenleisten

Einige der anderen standardisierten Seitenleisten, die Sie häufig antreffen, sind die folgenden:

- `\{{CSSRef}}`

  - : Auf jeder Seite zu [CSS](/de/docs/Web/CSS) vorhanden.

- `\{{GlossarySidebar}}`

  - : Auf jeder [Glossar](/de/docs/Glossary)-Seite vorhanden.

- `\{{LearnSidebar}}`

  - : Auf jeder Seite im Abschnitt [Lernen Sie Webentwicklung](/de/docs/Learn_web_development) vorhanden.

- `\{{HTMLSidebar}}`

  - : Generiert die Seitenleiste für die [HTML](/de/docs/Web/HTML)-Dokumentation.

- `\{{HTTPSidebar}}`

  - : Generiert die Seitenleiste für die [HTTP-Dokumentation](/de/docs/Web/HTTP).

- `\{{PWASidebar}}`

  - : Generiert die Seitenleiste für die Dokumentation zu [Progressive Web Apps (PWA)](/de/docs/Web/Progressive_web_apps).

> [!NOTE]
> Das passende Makro hängt vom [Seitentyp](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) ab. Die [Vorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates) für jeden Seitentyp enthält das passende Makro für diesen Seitentyp.

## Erläuterung der YAML-Syntax für Seitenleisten

In diesem Abschnitt werden die verschiedenen Funktionen erklärt, die in MDN-Seitenleisten enthalten sein können, sowie die YAML-Syntax, die zur Generierung jeder Funktion verwendet wird. Während Sie diese Dokumentation durcharbeiten, sollten Sie die Funktionen mit der [vorhandenen YAML-Seitenleistenstruktur](https://github.com/mdn/content/tree/main/files/sidebars) abgleichen.

### Beginn einer Seitenleistendefinition

Der Anfang jeder YAML-Seitenleistendaten-Definition ist ein Schlüssel `sidebar`, dessen Wert eine Liste ist, die die Daten der Seitenleiste definiert:

```yaml
sidebar:
  # sidebar definition goes here
```

### Einfache Einzel-Links

Um einen einfachen Einzel-Link in einer Seitenleiste zu erstellen, fügen Sie ein YAML-Listen-Item mit einer relativen URL hinzu:

```yaml
sidebar:
  - /MDN/Changelog
```

Die URL ist relativ zum Verzeichnis `docs` im MDN-URL-System, sodass zum Beispiel `/MDN/Changelog` einen Link zu https://developer.mozilla.org/de/docs/MDN/Changelog generieren würde. Das System verwendet automatisch den Titel des verlinkten Dokuments als Linktext.

Falls Sie benutzerdefinierten Linktext verwenden möchten, müssen Sie zwei Schlüssel im Listen-Item einfügen — `title`, das den benutzerdefinierten Linktext enthält, und `link`, das wie zuvor die relative URL enthält. Das folgende Beispiel würde wie zuvor einen Link zum MDN-Web-Docs-Änderungsprotokoll erstellen, jedoch mit dem benutzerdefinierten Linktext "Our changelog":

```yaml
sidebar:
  - title: Our changelog
    link: /MDN/Changelog
```

### Abschnittstitel

Ein Abschnittstitel ist ein Element der Seitenleiste, das als Überschrift in einer größeren Schriftgröße als normale Seitenleistentexte dargestellt wird. Dies wird häufig als Titel am oberen Rand einer Seitenleiste verwendet, der auf die Einstiegsseite für diesen Dokumentenbereich verlinkt, oder als Trennelement in besonders großen Seitenleisten (z. B. im Abschnitt [Lernen Sie Webentwicklung](/de/docs/Learn_web_development)).

Ein Abschnittstitel wird definiert, indem ein Schlüssel `type` mit dem Wert `section` im Listen-Item hinzugefügt wird. Beispiel:

```yaml
sidebar:
  - type: section
    link: /MDN
```

Ein Abschnittstitel kann benutzerdefinierten Linktext enthalten:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
    link: /MDN
```

Oder Sie können den Schlüssel `link` weglassen, um nur ein Textelement zu rendern, das keinen Link enthält:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
```

### Erstellen von expandierenden/zusammenklappenden Listen mit Links

Um eine expandierende/zusammenklappende Liste mit Links zu erstellen, erstellen Sie ein Listen-Item wie zuvor, fügen jedoch einen Schlüssel `children` hinzu, dessen Wert eine Liste der Links ist, die Sie als untergeordnete Listen-Items unter dem übergeordneten Element anzeigen möchten. Jedes untergeordnete Listen-Item hat dieselbe Syntax wie das übergeordnete. Ein untergeordnetes Listen-Item kann sogar eigene `children` enthalten, sodass Sie mehrere Hierarchieebenen erstellen können. Hier ist ein Beispiel:

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
          - /MDN/Community/Our_repositories
          - /MDN/Community/Translated_content
          - /MDN/Community/Security_vulnerability_response
      - /MDN/Community/Open_source_etiquette
      - /MDN/Community/Communication_channels
      - /MDN/Community/Discussions
      - /MDN/Community/Learn_forum
      - /MDN/Community/Issues
      - /MDN/Community/Pull_requests
      - /MDN/Community/Roles_teams
```

Beachten Sie auch den Schlüssel `details` — dieser steuert, ob eine Liste von Unterelementen beim Laden der Seite geschlossen oder geöffnet dargestellt wird. Mögliche Werte sind:

- `closed`: Die Unterelemente werden geschlossen dargestellt, es sei denn, die aktuelle Seite ist von einem der Unterelemente verlinkt, in diesem Fall werden sie geöffnet dargestellt.
- `open`: Die Unterelemente werden immer geöffnet dargestellt.

Wenn ein Listen-Item `children` und `details` enthält, wird es mit einer Struktur aus {{htmlelement("details")}}/{{htmlelement("summary")}} dargestellt, die die Unterelemente enthält. Diese Struktur kann dann durch Klicken auf das Dreiecksymbol oder durch Fokussieren der Zusammenfassungszeile und Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd> ein- oder ausgeklappt werden.

### Automatisches Rendern einer Unterseitenliste

Falls Sie eine Liste erstellen möchten, die Links zu den Unterseiten einer bestimmten Seite enthält, können Sie dies generieren, indem Sie ein Listen-Item mit einem Schlüssel `type` und dem Wert `listSubPages` angeben sowie einen Schlüssel `path`, dessen Wert der Pfad zur Seite ist, deren Unterseiten Sie verlinken möchten. Beispielsweise sieht die komplette [Glossar](/de/docs/Glossary)-Seitenleistendefinition (siehe [`glossarysidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml)) so aus:

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glossary
  - type: listSubPages
    path: /Glossary
```

Dies rendert eine Seitenleiste mit einem Abschnittstitel, der zurück zur Einstiegsseite des Glossars verlinkt, sowie einer Liste von Links zu allen Glossar-Unterseiten.

Möchten Sie dies als übergeordnetes Listen-Item mit den Unterseiten als expandierende/zusammenklappende Unterelemente rendern, müssen Sie zusätzlich einen Schlüssel `title` mit dem Text für das übergeordnete Element sowie einen Schlüssel `details` für das Offen-/Schließen-Verhalten der `<details>`/`<summary>`-Struktur angeben.

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glossary
    details: closed
```

#### Gruppieren von Unterseitenlisten

Es gibt auch den `type`-Wert `listSubPagesGrouped`. Dieser sorgt dafür, dass jede Unterseite mit einem Titel, der mit demselben Präfix gefolgt von einem Bindestrich beginnt (z. B. `item-`), in einer Unterliste unter einem Listen-Item des Präfixes plus Bindestrich und Sternchen (z. B. `item-*`) zusammengefasst wird.

Beispiel: Zum Zeitpunkt des Schreibens enthält das MDN-Glossar drei CORS-bezogene Seiten:

- CORS
- CORS-safelisted request header
- CORS-safelisted response header

Wenn wir die Glossar-Seitenleistendefinition folgendermaßen aktualisieren:

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glossary
    details: closed
```

Würden die Links zu diesen Seiten in eine Unterlistenstruktur wie diese gruppiert:

- CORS-\*
  - CORS
  - CORS-safelisted request header
  - CORS-safelisted response header

Realistischere Beispiele finden Sie in der [CSS](/de/docs/Web/CSS)-Seitenleistendefinition (siehe [`cssref.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml)), wo `listSubPagesGrouped` verwendet wird, um Links zu verwandten Kurzform- und Langform-Eigenschaften zu gruppieren. Das Listen-Item, das das Menü für die Eigenschaften-Seitenleiste generiert, sieht so aus:

```yaml
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
```

Diese Listen-Item-Definition enthält auch `tags`, das Thema des nächsten Abschnitts.

#### Filtern von Unterseitenlisten

Falls Sie mehrere unterschiedliche Seitentypen innerhalb desselben Verzeichnisses haben (wie durch den Schlüssel `page-type` im Frontmatter der Seite angegeben), können Sie die durch `listSubPages` und `listSubPagesGrouped` generierten Listen-Items nach Seitentyp filtern. Hierzu fügen Sie einen Schlüssel `tags` im Listen-Item hinzu, dessen Wert ein einzelner Seitentyp oder eine Liste der Seitentypen ist, die in den generierten Listen-Items enthalten sein sollen. Die CSS-Seitenleiste enthält mehrere solche Beispiele:

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
- type: listSubPages
  path: /Web/CSS
  title: Combinators
  tags: css-combinator
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Pseudo-classes
  tags: css-pseudo-class
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Pseudo-elements
  tags: css-pseudo-element
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: At-rules
  tags: css-at-rule
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Functions
  tags: css-function
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Types
  tags: css-type
  details: closed
```

### Lokalisierung von Textstrings

Wie oben erläutert, können Sie benutzerdefinierten Text für Ihre Linktexte oder Abschnittstitel in einem Schlüssel `title` einbinden. Möchten Sie diesen Text in mehrere Sprachen lokalisieren, können Sie einen Platzhalter im Schlüssel `title` einfügen und die Definitionen für diesen Platzhalter in den verschiedenen Sprachen unten in der YAML-Datei in einem `l10n`-Wörterbuch angeben.

Hier ein Beispiel, um zu zeigen, wie das aussieht. In der [HTML](/de/docs/Web/HTML)-Seitenleiste (siehe [`htmlsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml)) definieren wir ein Listen-Item, das eine Liste von Links zu allen {{htmlelement("input")}}-Typreferenzseiten generiert. Der Text des übergeordneten Listen-Items wird in dem Schlüssel `title` als Platzhalter `Input_types` definiert:

```yaml
- type: listSubPages
  path: /Web/HTML/Element/input
  title: Input_types
  details: closed
  code: true
```

Am unteren Rand der Datei definieren wir das Wörterbuch `l10n`. Jeder Schlüssel in `l10n` repräsentiert eine andere Locale — `en-US`, `fr`, `ja` usw. Der Wert jedes dieser Schlüssel ist ein Unterwörterbuch, dessen Schlüssel die in den Listen-Items definierten Platzhalter sind. Jeder Schlüsselwert ist der Wert dieses Platzhalters in der jeweiligen Locale.

Beispiel:

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

Wir haben hier nur die `Input_types`-Werte in jeder Locale zur Kürze angegeben.

Wenn die Seitenleiste gerendert wird, ersetzt das System den Text `Input_types` durch seinen definierten Wert in der jeweiligen Locale-Version der Website. Vergleichen Sie zum Beispiel:

- https://developer.mozilla.org/de/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

Falls auf eine MDN-Locale zugegriffen wird, die keinen Wert für einen bestimmten Platzhalter definiert hat, wird standardmäßig die `en-US`-Version verwendet. Ist keine `en-US`-Version definiert, wird der Platzhaltertext wörtlich angezeigt (in diesem Fall `Input_types`).

## Nicht standardisierte Seitenleisten

Es gibt einige Seitenleisten auf MDN, die das oben beschriebene Standardsystem nicht verwenden. Diese sind komplexe, vollständig automatisierte Makros, die selten geändert werden müssen:

- `\{{APIRef("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Referenzseiten](/de/docs/Web/API#interfaces) angezeigt wird. Für jede Schnittstelle generiert das Makro automatisch Links zu den auf der Schnittstelle definierten Elementen — Eigenschaften, Methoden, Events usw. Der einzige Parameter ist der Name der entsprechenden API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die verwandten Seiten, die unten in der Seitenleiste angezeigt werden, zu bearbeiten, bearbeiten Sie den GroupData-Eintrag dieser API.
- `\{{DefaultAPISidebar("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Einstiegsseiten](/de/docs/Web/API#specifications) angezeigt wird. Der einzige Parameter ist der Name der entsprechenden API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die Leitfäden, Schnittstellen usw., die in der Seitenleiste einer bestimmten API verlinkt sind, zu bearbeiten, bearbeiten Sie den GroupData-Eintrag dieser API.
- `\{{JSRef("<JS_topic>")}}`
  - : Die Seitenleiste auf [JavaScript-Referenzseiten](/de/docs/Web/JavaScript/Reference). Der einzige Parameter ist das Verzeichnis, für das Sie die Links generieren möchten.

Falls Sie der Meinung sind, dass eine dieser Seitenleisten aktualisiert werden sollte, kontaktieren Sie uns über die [üblichen Kanäle](/de/docs/MDN/Community/Communication_channels).

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Makros für Inhaltslinks](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Makros für Seitenabschnitte](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Makros für Banner und Hinweise](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
