---
title: Seitenleisten
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Alle MDN-Seiten sollten Seitenleisten haben. Die meisten von ihnen werden mit einem System erstellt, das Datenstrukturen in YAML-Dateien definiert und Seitenleisten über Front Matter oder ein Makro auf den Seiten einfügt.

In diesem Leitfaden lernen Sie, wie diese Seitenleisten funktionieren, damit Sie bestehende Seitenleisten bearbeiten und bei Bedarf neue erstellen können.

> [!NOTE]
> Wenn Sie Seitenleisten bearbeiten, können Sie `yarn tool` Befehle zum Formatieren und Synchronisieren mit Umleitungen verwenden.
> Weitere Informationen finden Sie in der Dokumentation zu [Yari's CLI Tool](https://github.com/mdn/yari/blob/main/docs/cli-tool.md).

## Wie Seitenleisten funktionieren

Jede Seitenleiste hat eine entsprechende YAML-Datei, die sich im [`files/sidebars`](https://github.com/mdn/content/tree/main/files/sidebars) Verzeichnis des MDN `content` Repos befindet. Diese Datei definiert die hierarchische Struktur der Seitenleistenlinks, die URLs, auf die jeder Link verweisen soll, und optionale benutzerdefinierte Überschriften/Linktexte, die bei Bedarf in verschiedene Sprachen lokalisiert werden können.

Die Seite, die Sie derzeit lesen, hat eine Seitenleiste, die in der Datei [`mdnsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml) definiert ist.

Die Seitenleiste wird auf der aktuellen Seite (und allen anderen im selben Dokumentbaum) durch das Einfügen eines `sidebar`-Front Matter-Eintrags im [Dokumentenquellcode](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/mdn/writing_guidelines/page_structures/sidebars/index.md) dargestellt:

```md
---
title: Sidebars
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

All MDN pages should have sidebars.
```

Das Front Matter ist der Inhalt zwischen den Bindestrichen. Das Einfügen von `sidebar: mdnsidebar` im Front Matter veranlasst das System, nach einer YAML-Datei mit demselben Namen im Verzeichnis `files/sidebars` zu suchen. Wenn es eine findet, übernimmt es automatisch die Darstellung der Seitenleiste und platziert sie auf der Seite als eine oder mehrere geordnete Listen ({{htmlelement("ol")}} Elemente).

Versuchen Sie, in der Seitenleiste zu navigieren, bevor Sie zu dieser Seite zurückkehren. Sie werden feststellen, dass beim Navigieren zu einer Seite im Allgemeinen die Linkliste für den Abschnitt, in dem Sie sich gerade befinden, erweitert wird, während die anderen eingeklappt sind und die Seite, auf der Sie sich befinden, hervorgehoben ist.

## Erklärung der YAML-Syntax für Seitenleisten

Dieser Abschnitt erklärt die verschiedenen Funktionen, die in MDN-Seitenleisten enthalten sein können, und die YAML-Syntax, die zur Generierung jeder Funktion verwendet wird. Während Sie diese Dokumentation durchgehen, vergleichen Sie die Funktionen mit der [bereits existierenden Seitenleisten-YAML](https://github.com/mdn/content/tree/main/files/sidebars).

### Starten einer Seitenleistendefinition

Der Beginn jeder YAML-Seitenleistendatendefinition ist ein `sidebar`-Schlüssel, dessen Wert eine Liste ist, die die Seitenleistendaten definiert:

```yaml
sidebar:
  # sidebar definition goes here
```

### Einzelne Links

Um einen einzelnen Link in einer Seitenleiste zu erstellen, fügen Sie ein YAML-Listenelement mit einer relativen URL ein:

```yaml
sidebar:
  - /MDN/Changelog
```

Die URL ist relativ zum `docs` Verzeichnis in der MDN-URL-Struktur, sodass beispielsweise `/MDN/Changelog` einen Link zu https://developer.mozilla.org/de/docs/MDN/Changelog generieren würde. Das System verwendet automatisch den Dokumenttitel der verlinkten Seite als Linktext.
Wenn die Seite einen `short-title` Schlüssel im Front Matter hat, wird dieser stattdessen für den angezeigten Seitenleistenlink verwendet.

Wenn Sie benutzerdefinierten Linktext verwenden möchten, der nicht der `title` oder `short-title` eines Dokuments ist, müssen Sie zwei Schlüssel im Listenelement einfügen — `title`, der den benutzerdefinierten Linktext enthält, und `link`, der wie zuvor die relative URL enthält. Das folgende Beispiel würde wie zuvor einen Link zum MDN Web Docs Änderungsprotokoll erstellen, jedoch mit benutzerdefiniertem Linktext "Our changelog":

```yaml
sidebar:
  - title: Our changelog
    link: /MDN/Changelog
```

### Abschnittstitel

Ein Abschnittstitel ist ein Seitenlisteneintrag, der in einer größeren Schriftgröße als normale Seitenlisteneinträge dargestellt wird. Dies wird häufig als Titel oben auf einer Seitenleiste verwendet, die auf die Einstiegsseite für diesen Abschnitt der Dokumente verweist, oder als Abschnitt-Trenner im Falle von besonders großen Seitenleisten (wie in der [Learn web development section](/de/docs/Learn_web_development) zu sehen).

Ein Abschnittstitel wird definiert, indem man einen `type`-Schlüssel mit dem Wert `section` im Listenelement einfügt. Zum Beispiel:

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

Oder Sie können den `link`-Schlüssel weglassen, um einfach ein Textelement zu rendern, das keinen Link enthält:

```yaml
sidebar:
  - type: section
    title: Yay MDN!
```

### Erstellen von erweiterten/eingeklappten Linklisten

Um eine Liste mit erweiterten/eingeklappten Links zu erstellen, erstellen Sie ein Listenelement wie zuvor, aber fügen Sie einen `children`-Schlüssel hinzu, dessen Wert eine Liste der Links ist, die Sie als untergeordnete Listenelemente unter dem übergeordneten Element anzeigen möchten. Jedes untergeordnete Listenelement hat dieselbe Syntax wie das übergeordnete. Ein untergeordnetes Listenelement kann sogar seine eigenen `children` enthalten, sodass Sie mehrere Hierarchieebenen erstellen können. Hier ist ein Beispiel:

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
          - /MDN/Community/Security_vulnerability_response
      - /MDN/Community/Open_source_etiquette
      - /MDN/Community/Communication_channels
      - /MDN/Community/Discussions
# etc.
```

Beachten Sie auch den `details`-Schlüssel — dieser steuert, ob die Liste der untergeordneten Elemente eines Listenelements geschlossen oder offen dargestellt wird, wenn die Seite zuerst geladen wird. Mögliche Werte sind:

- `closed`: Die untergeordneten Elemente sind geschlossen, es sei denn, die aktuelle Seite wird von einem der untergeordneten Elemente verlinkt, in diesem Fall werden sie geöffnet dargestellt.
- `open`: Die untergeordneten Elemente sind immer geöffnet dargestellt.

Wenn ein Listenelement `children` und `details` angegeben hat, wird es mit einer {{htmlelement("details")}}/{{htmlelement("summary")}}-Elementstruktur innerhalb desselben dargestellt, die die untergeordnete Liste enthält, die dann durch Klicken auf das Enthüllungsdreieck-Widget erweitert/eingeklappt oder durch Fokussieren der Zusammenfassung und Drücken von <kbd>Enter</kbd>/<kbd>Return</kbd> erweitert/eingeklappt werden kann.

### Automatisches Rendern einer Unterseitenliste

Wenn Sie eine Liste mit Links zu Unterseiten einer bestimmten Seite erstellen möchten, können Sie dies generieren, indem Sie ein Listenelement mit einem `type`-Schlüssel des Wertes `listSubPages` und einem `path`-Schlüssel angeben, dessen Wert der Pfad zu der Seite ist, deren Unterseiten Sie generieren möchten. Zum Beispiel sieht die gesamte [Glossary](/de/docs/Glossary) Seitenleistendefinition (siehe [`glossarysidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml)) so aus:

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glossary
  - type: listSubPages
    path: /Glossary
```

Dies rendert eine Seitenleiste mit einem Abschnittstitel, der zur Einstiegsseite des Glossars zurückverlinkt, und einer obersten Liste von Links zu allen Glossar-Kindseiten.

Wenn Sie dies als übergeordnetes Listenelement darstellen möchten, wobei die Unterseiten als erweiterte/eingeklapptes untergeordnetes Liste erscheinen, müssen Sie zusätzlich einen `title`-Schlüssel angeben, der den Text für das übergeordnete Element angibt, und einen `details`-Schlüssel, der das Öffnen/Schließen-Verhalten der `<details>`/`<summary>`-Struktur angibt.

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glossary
    details: closed
```

#### Gruppierung von Unterseitenlisten

Es gibt auch einen `type`-Wert von `listSubPagesGrouped`. Dies führt dazu, dass alle Unterseiten mit Titeln, die mit dem gleichen Substring beginnen, gefolgt von einem Bindestrich (zum Beispiel `item-`), in einer Unterliste unter einem Listenelement des Substrings, plus einem Bindestrich und einem Stern (zum Beispiel `item-*`) enthalten werden.

Zum Beispiel enthält das MDN Glossary zum Zeitpunkt des Schreibens drei CORS-bezogene Seiten:

- CORS
- CORS-safelisted request header
- CORS-safelisted response header

Wenn wir die Glossary-Seitenleistendefinition auf Folgendes aktualisieren würden:

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glossary
    details: closed
```

Würden die Links zu diesen Seiten in einer Unterlistenstruktur wie diese gruppiert:

- CORS-\*
  - CORS
  - CORS-safelisted request header
  - CORS-safelisted response header

Realistischere Beispiele finden Sie in der [CSS](/de/docs/Web/CSS) Seitenleistendefinition (siehe [`cssref.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml)), wo `listSubPagesGrouped` verwendet wird, um Links verwandter Kurz- und Langhand-Eigenschaften zusammenzufassen. Das Listenelement, das das Eigenschaften-Seitenleistenmenü generiert, sieht so aus:

```yaml
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Properties
  tags:
    - css-property
    - css-shorthand-property
  details: closed
```

Diese Listenelementdefinition enthält auch `tags`, was das Thema des nächsten Abschnitts ist.

#### Filtern von Unterseitenlisten

Wenn Sie mehrere verschiedene Seitentypen im selben Verzeichnis haben (wie es durch den `page-type` Schlüssel im Front Matter der Seite angegeben ist), können Sie die Listenelemente, die durch `listSubPages` und `listSubPagesGrouped` generiert werden, nach Seitentyp filtern. Dazu fügen Sie einen `tags`-Schlüssel in das Listenelement ein, dessen Wert ein einzelner Seitentyp oder eine Liste der Seitentypen ist, die Sie in den generierten Listenelementen einbeziehen möchten. Die CSS-Seitenleiste enthält mehrere solche Beispiele:

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

Wie wir oben erklärt haben, können Sie benutzerdefinierten Text in einem `title`-Schlüssel einfügen, um Ihren Linktext oder Abschnittstitel zu füllen. Wenn Sie diesen Text in mehrere Sprachen lokalisieren möchten, können Sie einen Platzhalter im `title`-Schlüssel einfügen und dann die Definitionen, was dieser Platzhalter in verschiedenen Sprachen sein soll, in einem `l10n`-Wörterbuch am Ende der YAML-Datei angeben.

Schauen wir uns ein Beispiel an, um zu zeigen, wie das aussieht. In der [HTML](/de/docs/Web/HTML) Seitenleiste (siehe [`htmlsidebar.yaml`](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml)) definieren wir ein Listenelement, das eine Liste von Links zu allen {{htmlelement("input")}}-Typ-Referenzseiten erzeugt. Der Text des übergeordneten Listenelements wird im `title`-Schlüssel als Platzhalter von `Input_types` definiert:

```yaml
- type: listSubPages
  path: /Web/HTML/Reference/Elements/input
  title: Input_types
  details: closed
  code: true
```

Unten am Ende der Datei definieren wir das `l10n`-Wörterbuch. Jeder Schlüssel innerhalb des `l10n` repräsentiert eine andere Lokalisierung — `en-US`, `fr`, `ja` usw. Der Wert jedes dieser Schlüssel ist ein Unterwörterbuch, dessen Schlüssel die Platzhalter sind, die in den Listenelementdefinitionen definiert sind. Jeder Schlüsselwert ist der Wert dieses Platzhalters in dieser jeweiligen Lokalisierung.

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

Wir haben nur die `Input_types` Werte in jeder Lokalisierung zur Kürze einbezogen.

Wenn die Seitenleiste gerendert wird, ersetzt das System den Text `Input_types` durch seinen definierten Wert in welcher auch immer lokalisierte Version der Seite aufgerufen wird. Vergleichen Sie zum Beispiel die folgenden:

- https://developer.mozilla.org/de/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

Wenn auf eine MDN-Lokalisierung zugegriffen wird, für die kein Wert für einen bestimmten Platzhalter definiert ist, wird standardmäßig die `en-US`-Version verwendet. Wenn keine `en-US`-Version definiert ist, wird der buchstäbliche Platzhaltertext angezeigt (was in diesem Fall `Input_types` wäre).

## Nicht standardisierte Seitenleisten

Es gibt einige Seitenleisten auf MDN, die nicht das oben beschriebene Standardsystem verwenden. Dies sind komplexe, vollständig automatisierte Makros, die nicht sehr oft geändert werden müssen:

- `\{{APIRef("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Referenzseiten](/de/docs/Web/API#interfaces) angezeigt wird. Für jede Schnittstelle generiert das Makro automatisch Links zu Mitgliedern, die auf der Schnittstelle definiert sind — Eigenschaften, Methoden, Ereignisse usw. Der einzelne Parameter ist der Name der relevanten API-Gruppe, die in der Datei [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) definiert ist. Um die am unteren Rand der Seitenleiste angezeigten verwandten Seiten zu bearbeiten, bearbeiten Sie den Eintrag der API in den GroupData.
- `\{{DefaultAPISidebar("<API>")}}`
  - : Die API-Seitenleiste, die auf [API-Einstiegsseiten](/de/docs/Web/API#specifications) angezeigt wird. Der einzelne Parameter ist der Name der relevanten API-Gruppe, die in der [`GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) Datei definiert ist. Um die Leitfäden, Schnittstellen usw. zu bearbeiten, die in der Seitenleiste einer bestimmten API verlinkt sind, bearbeiten Sie den Eintrag der API in den GroupData.
- `\{{JSRef("<JS_topic>")}}`
  - : Die Seitenleiste auf [JavaScript-Referenzseiten](/de/docs/Web/JavaScript/Reference). Der einzelne Parameter ist das Verzeichnis, für das Sie die Links generieren möchten.

Wenn Sie denken, dass eine dieser Seitenleisten aktualisiert werden sollte, kontaktieren Sie uns über die [üblichen Kanälen](/de/docs/MDN/Community/Communication_channels).

## Siehe auch

- [Verwendung von Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Inhaltslink-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Seitensektionsmakros](/de/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Banner- und Hinweis-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
