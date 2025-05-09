---
title: Seitenleisten
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: f6985b3eaf98b8d91fbcc19ca3226db22d9713a1
---

Alle MDN-Seiten sollten Seitenleisten haben.
Die meisten von ihnen werden mit einem System erstellt, das Datenstrukturen in YAML-Dateien definiert und Seitenleisten über Front Matter oder ein Makro auf Seiten einbindet.

In diesem Leitfaden erfahren Sie, wie diese Seitenleisten funktionieren, damit Sie vorhandene Seitenleisten bearbeiten und bei Bedarf neue erstellen können.

> [!NOTE]
> Wenn Sie Seitenleisten bearbeiten, können Sie `yarn tool`-Befehle zum Formatieren und Synchronisieren mit Weiterleitungen verwenden.
> Siehe die Dokumentation zum [Yari's CLI Tool](https://github.com/mdn/yari/blob/main/docs/cli-tool.md) für Informationen.

## Wie Seitenleisten funktionieren

Jede Seitenleiste hat eine entsprechende YAML-Datei, die sich im `content`-Repository von MDN im Verzeichnis [`files/sidebars`](https://github.com/mdn/content/tree/main/files/sidebars) befindet. Diese definiert die hierarchische Struktur der Seitenleistenlinks, die URLs, auf die jeder Link verweisen soll, und optional benutzerdefinierte Überschriften/Linktexte, die bei Bedarf in verschiedene Sprachen lokalisiert werden können.

Die Seite, die Sie gerade lesen, hat eine Seitenleiste, die in der Datei [`mdnsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml) definiert ist.

Die Seitenleiste wird auf der aktuellen Seite (und allen anderen im gleichen Dokumentbaum) gerendert, indem ein `sidebar`-Front Matter-Eintrag in der [Dokumentenquelle](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/mdn/writing_guidelines/page_structures/sidebars/index.md) eingefügt wird:

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

All MDN pages should have sidebars.
```

Das Front Matter ist der Inhalt zwischen den Strichen. Wenn `sidebar: mdnsidebar` im Front Matter enthalten ist, sucht das System nach einer YAML-Datei mit demselben Namen im Verzeichnis `files/sidebars`. Wenn es eine findet, kümmert es sich automatisch um das Rendern der Seitenleiste und platziert sie als eine oder mehrere geordnete Listen ({{htmlelement("ol")}}-Elemente) auf der Seite.

Versuchen Sie, in der Seitenleiste zu navigieren, bevor Sie zu dieser Seite zurückkehren. Sie werden feststellen, dass beim Navigieren zu einer Seite im Allgemeinen die Linkliste für den Abschnitt, in dem Sie sich gerade befinden, erweitert wird, während die anderen eingeklappt sind, und die Seite, auf der Sie sich befinden, hervorgehoben ist.

## Seitenleisten-YAML-Syntax erklärt

Dieser Abschnitt erklärt die verschiedenen Funktionen, die in MDN-Seitenleisten enthalten sein können, und die YAML-Syntax, die zum Erstellen jeder einzelnen verwendet wird. Während Sie diese Dokumentation durchgehen, vergleichen Sie die Funktionen mit dem [bestehenden Seitenleisten-YAML](https://github.com/mdn/content/tree/main/files/sidebars).

### Starten einer Seitenleistendefinition

Der Beginn jeder YAML-Seitenleistendaten-Definition ist ein `sidebar`-Schlüssel, dessen Wert eine Liste ist, die die Seitenleistendaten definiert:

```yaml
sidebar:
  # sidebar definition goes here
```

### Einzelne Links

Um einen einzelnen Link in einer Seitenleiste zu erstellen, fügen Sie einen YAML-Listeneintrag mit einer relativen URL ein:

```yaml
sidebar:
  - /MDN/Writing_guidelines/Page_structures/Sidebars
```

Die URL ist relativ zum `docs`-Verzeichnis in der MDN-URL-Struktur, sodass zum Beispiel `/MDN/Writing_guidelines/Page_structures/Sidebars` einen Link zur aktuellen Seite generieren würde. Das System verwendet automatisch den Dokumententitel der verlinkten Seite als Linktext.
Wenn die Seite einen `short-title`-Schlüssel im Front Matter hat, wird dieser stattdessen für den Anzeigetext des Seitenleisten-Links verwendet.

Wenn Sie benutzerdefinierten Linktext verwenden möchten, der weder ein Dokumenttitel noch ein `short-title` ist, müssen Sie zwei Schlüssel im Listeneintrag einfügen — `title`, der den benutzerdefinierten Linktext enthält, und `link`, der die relative URL wie vorher enthält. Das folgende Beispiel würde wie zuvor einen Link zur aktuellen Seite erstellen, jedoch mit dem benutzerdefinierten Linktext "Writing sidebars":

```yaml
sidebar:
  - title: Writing sidebars
    link: /MDN/Writing_guidelines/Page_structures/Sidebars
```

### Abschnittstitel

Ein Abschnittstitel ist ein Seitenleistenelement, das in einer größeren Schriftart als normale Seitenlistenelemente angezeigt wird. Dies wird häufig als Titel oben auf einer Seitenleiste verwendet, der auf die Hauptseite für diesen Abschnitt von Dokumenten verlinkt, oder als Abschnittstrenner im Falle besonders großer Seitenleisten (wie im [Lernen Web-Entwicklung Abschnitt](/de/docs/Learn_web_development) zu sehen).

Ein Abschnittstitel wird definiert, indem ein `type`-Schlüssel mit einem Wert von `section` im Listeneintrag enthalten ist. Zum Beispiel:

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

Oder Sie können den `link`-Schlüssel weglassen, um ein Textlistenelement ohne Link zu rendern:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
```

### Erstellen von ein- und ausklappbaren Listen von Links

Um eine ein- und ausklappbare Liste von Links zu erstellen, erstellen Sie wie zuvor einen Listeneintrag, fügen jedoch einen `children`-Schlüssel hinzu, dessen Wert eine Liste der Links ist, die Sie als untergeordnete Listenelemente unterhalb des Elternelements anzeigen möchten. Jedes untergeordnete Listenelement hat die gleiche Syntax wie das Elternteil. Ein untergeordnetes Element kann sogar eigene `children` enthalten, sodass Sie mehrere Hierarchieebenen erstellen können. Hier ist ein Beispiel:

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

Beachten Sie auch den `details`-Schlüssel — dieser steuert, ob eine Liste von Kinderelementen geschlossen oder offen gerendert wird, wenn die Seite zum ersten Mal geladen wird. Mögliche Werte sind:

- `closed`: Die Kinderelemente werden geschlossen gerendert, es sei denn, die aktuelle Seite ist mit einem der Kinderelemente verlinkt, in diesem Fall werden sie offen gerendert.
- `open`: Die Kinderelemente werden immer offen gerendert.

Wenn ein Listenelement `children` und `details` angegeben hat, wird es mit einer {{htmlelement("details")}}/{{htmlelement("summary")}}-Elementstruktur darin gerendert, die die Kinderliste enthält, die dann erweitert/eingeklappt werden kann, indem Sie das Dreiecks-Werkzeug zum Offenlegen anklicken oder die Zusammenfassung fokussieren und <kbd>Enter</kbd>/<kbd>Return</kbd> drücken.

### Automatisches Rendern einer Unterseitenliste

Wenn Sie eine Liste erstellen möchten, die Links zu den Unterseiten einer bestimmten Seite enthält, können Sie dies generieren, indem Sie einen Listeneintrag mit einem `type`-Schlüssel des Werts `listSubPages` festlegen und einem `path`-Schlüssel, dessen Wert der Pfad zur Seite ist, deren Unterseiten Sie generieren möchten. Zum Beispiel sieht die gesamte [Glossar](/de/docs/Glossary) Seitenleistendefinition (siehe [`glossarysidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml)) so aus:

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glossary
  - type: listSubPages
    path: /Glossary
```

Dies rendert eine Seitenleiste mit einem Abschnittstitel, der zurück zur Glossar-Hauptseite verlinkt, und einer obersten Ebenenliste von Links zu allen Glossar-Unterseiten.

Wenn Sie dies als Elternelement mit den Unterseiten als ein- und ausklappbare untergeordnete Liste rendern möchten, müssen Sie zusätzlich einen `title`-Schlüssel angeben, der den anzuzeigenden Text für das Elternelement spezifiziert, und einen `details`-Schlüssel, der das Öffnen/Schließen-Verhalten der `<details>`/`<summary>`-Struktur spezifiziert.

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glossary
    details: closed
```

#### Gruppieren von Listen-Unterseiten

Es gibt auch einen `type`-Wert von `listSubPagesGrouped`. Dies bewirkt, dass alle Unterseiten mit Titeln, die mit demselben Präfix gefolgt von einem Bindestrich beginnen (zum Beispiel `item-`), in eine untergeordnete Liste unter einem Listenelement des Präfixes, plus einem Bindestrich und einem Stern (zum Beispiel `item-*`), aufgenommen werden.

Zum Beispiel enthält das MDN-Glossar zum Zeitpunkt des Schreibens drei CORS-bezogene Seiten:

- CORS
- CORS-safelisted request header
- CORS-safelisted response header

Wenn wir die Glossarseitenleisten-Definition auf dieses aktualisieren würden:

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glossary
    details: closed
```

Würden die Links zu diesen Seiten in eine untergeordnete Listenstruktur wie folgt gruppiert werden:

- CORS-\*
  - CORS
  - CORS-safelisted request header
  - CORS-safelisted response header

Realistischere Beispiele finden sich in der [CSS](/de/docs/Web/CSS) Seitenleistendefinition (siehe [`cssref.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml)), wo `listSubPagesGrouped` verwendet wird, um Links zu verwandten Kurz- und Langform-Eigenschaften zusammenzufassen. Das Listenelement, das das Eigenschafts-Menü der Seitenleiste generiert, sieht so aus:

```yaml
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
```

Diese Listenelementdefinition enthält auch `tags`, das Thema des nächsten Abschnitts.

#### Filtern von Listen-Unterseiten

Wenn Sie mehrere verschiedene Seitentypen im selben Verzeichnis haben (wie durch den `page-type`-Schlüssel im Front Matter der Seite angegeben), können Sie die durch `listSubPages` und `listSubPagesGrouped` generierten Listenelemente nach Seitentyp filtern. Dazu fügen Sie einen `tags`-Schlüssel im Listenelement hinzu, dessen Wert ein einzelner Seitentyp oder eine Liste der Seitentypen ist, die Sie in den generierten Listenelementen einbeziehen möchten. Die CSS-Seitenleiste enthält mehrere solche Beispiele:

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

Wie oben erklärt, können Sie benutzerdefinierten Text einfügen, um Ihren Linktext oder Abschnittstitel in einem `title`-Schlüssel zu füllen. Wenn Sie diesen Text in mehrere Sprachen lokalisieren möchten, können Sie einen Platzhalter im `title`-Schlüssel einfügen und dann am Ende der YAML-Datei die Definitionen dessen, was dieser Platzhalter in verschiedenen Sprachen sein soll, in einem `l10n`-Wörterbuch enthalten.

Schauen wir uns ein Beispiel an, um zu sehen, wie das aussieht. In der [HTML](/de/docs/Web/HTML) Seitenleiste (siehe [`htmlsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml)) definieren wir ein Listenelement, das eine Liste von Links zu allen {{htmlelement("input")}}-Typ-Referenzseiten generiert. Der Text des Elternlistenelements wird im `title`-Schlüssel als ein Platzhalter von `Input_types` definiert:

```yaml
- type: listSubPages
  path: /Web/HTML/Reference/Elements/input
  title: Input_types
  details: closed
  code: true
```

Am Ende der Datei definieren wir das `l10n`-Wörterbuch. Jeder Schlüssel innerhalb von `l10n` repräsentiert einen anderen Sprachraum — `en-US`, `fr`, `ja`, etc. Der Wert eines jeden dieser Schlüssel ist ein Unterwörterbuch, dessen Schlüssel die in den Listenelement-Definitionen definierten Platzhalter sind. Jeder Schlüsselwert ist der Wert des Platzhalters in dem jeweiligen Sprachraum.

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

Wir haben aus Platzgründen nur die `Input_types`-Werte in jedem Sprachraum aufgenommen.

Wenn die Seitenleiste gerendert wird, ersetzt das System den `Input_types`-Text durch seinen definierten Wert in welcher Sprachraumversion der Website auch immer aufgerufen wird. Vergleichen Sie zum Beispiel die folgenden:

- https://developer.mozilla.org/de/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

Wenn auf ein MDN-Sprachraum zugegriffen wird, das keinen Wert für einen bestimmten Platzhalter definiert hat, wird auf die `en-US`-Version zurückgegriffen. Wenn keine `en-US`-Version definiert ist, wird der literale Platzhaltertext angezeigt (was in diesem Fall `Input_types` wäre).

## Nicht standardmäßige Seitenleisten

Es gibt einige Seitenleisten auf MDN, die nicht das oben beschriebene Standardsystem verwenden. Diese sind komplexe, vollständig automatisierte Makros, die nicht häufig geändert werden müssen:

- `\{{APIRef("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Referenzseiten](/de/docs/Web/API#interfaces) angezeigt wird. Für jede Schnittstelle generiert das Makro automatisch Links zu den auf der Schnittstelle definierten Mitgliedern – Eigenschaften, Methoden, Ereignisse usw. Der einzige Parameter ist der Name der relevanten API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die am Ende der Seitenleiste angezeigten zugehörigen Seiten zu bearbeiten, bearbeiten Sie den GroupData-Eintrag dieser API.
- `\{{DefaultAPISidebar("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Startseiten](/de/docs/Web/API#specifications) angezeigt wird. Der einzige Parameter ist der Name der relevanten API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die verlinkten Leitfäden, Schnittstellen usw. in der Seitenleiste einer bestimmten API zu bearbeiten, bearbeiten Sie den GroupData-Eintrag dieser API.
- `\{{JSRef("<JS_topic>")}}`
  - : Die Seitenleiste auf [JavaScript-Referenzseiten](/de/docs/Web/JavaScript/Reference). Der einzige Parameter ist das Verzeichnis, für das Sie die Links generieren möchten.

Wenn Sie denken, dass eines dieser Makros aktualisiert werden sollte, kontaktieren Sie uns über die [üblichen Kanäle](/de/docs/MDN/Community/Communication_channels).

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Inhaltslink-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Seitenabschnitt-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Banner und Hinweise Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
