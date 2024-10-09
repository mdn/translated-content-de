---
title: Einen Recipe-Beitrag leisten
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Wenn Sie ein Beispiel für das Layout-Kochbuch beitragen möchten, erklärt diese Seite die Schritte, die erforderlich sind, um Ihr Beispiel zu veröffentlichen.

## Was macht ein gutes Recipe aus?

**Die einfachstmögliche Version eines nützlichen Webdesign-Musters**. Jede Zeile CSS, die Sie einfügen, sollte dazu dienen, das Muster zu demonstrieren. Lassen Sie also alles weg, was nur dazu dient, das Beispiel hübsch aussehen zu lassen. Die Idee ist, dass jemand das Muster nehmen und es mit seinen eigenen Stilen in einer Website verwenden kann.

Ein Recipe besteht aus:

- Einem Live-Beispiel, das im [CSS Examples GitHub Repository](https://github.com/mdn/css-examples) gespeichert ist.
- Einer herunterladbaren Version dieses Beispiels, ebenfalls im CSS Examples Repository gespeichert.
- Einer Seite im Abschnitt des [CSS Layout-Kochbuchs](/de/docs/Web/CSS/Layout_cookbook) der Website, die die folgenden Komponenten enthalten sollte:

  1. Einführung
  2. Anforderungen
  3. Recipe
  4. Entscheidungen
  5. Nützliche Fallbacks oder alternative Methoden (falls relevant)
  6. Barrierefreiheitsaspekte
  7. Browser-Kompatibilität (nur für CSS-Eigenschaften, die nicht vollständig unterstützt werden)
  8. Zusätzliche Ressourcen

## Schritte, um ein Recipe zu veröffentlichen

Um ein Recipe zu erstellen und es dem CSS Layout-Kochbuch hinzuzufügen, folgen Sie diesen Schritten:

1. [Ein Muster erstellen](#1._ein_muster_erstellen)
2. [Ein Live-Beispiel erstellen](#2._ein_live-beispiel_erstellen)
3. [Eine herunterladbare Version erstellen](#3._eine_herunterladbare_version_erstellen)
4. [Einen Pull Request öffnen](#4._einen_pull_request_mit_ihrem_beispiel_öffnen)
5. [Ihren Inhalt zu MDN hinzufügen](#5._ihre_seite_erstellen)

### 1. Ein Muster erstellen

Bevor Sie Ihr Beispiel in ein Recipe umwandeln, beginnen Sie damit, Ihr Muster als einfache HTML-Seite zu erstellen. Überlegen Sie, was Sie demonstrieren möchten, und halten Sie es so einfach wie möglich. Verwenden Sie beschreibende Wörter wie "container" oder "item", wenn Sie Klassennamen hinzufügen.

Stellen Sie sicher, dass Sie das HTML und CSS in mehreren Browsern, bei unterschiedlichen Ansichtsgrößen und auf verschiedenen Geräten getestet haben. Stellen Sie außerdem sicher, dass jede CSS-Stilsetzung barrierefrei ist. Während es in Ordnung ist, CSS-Eigenschaften mit begrenzter Unterstützung zu verwenden, sollten Sie beim Erstellen der Seite unbedingt Informationen zur Browser-Kompatibilität hinzufügen, insbesondere im Bereich zur Browser-Kompatibilität. In einigen Fällen kann es hilfreich sein, eine zweite Version Ihres Beispiels mit Fallback-Unterstützung zu erstellen.

### 2. Ein Live-Beispiel erstellen

Die Live-Beispiele auf Kochbuchseiten, wie zum Beispiel für [das Zentrieren eines Elements](/de/docs/Web/CSS/Layout_cookbook/Center_an_element), und anderswo auf MDN ermöglichen es den Lesern, mit dem Code zu experimentieren und relevante Teile zu ändern, ohne von dem gesamten Code überwältigt zu werden. Ihr Recipe wird durch ein oder mehrere Beispiele veranschaulicht.

Forken Sie das [CSS Examples Repository](https://github.com/mdn/css-examples) und werfen Sie einen Blick in den Ordner `css-cookbook`. Dort gibt es eine [cookbook-template.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html) Vorlage. Kopieren Sie diese Datei und verwenden Sie sie als Ausgangspunkt. Speichern Sie sie im Verzeichnis `css-cookbook` mit einem Namen, der für Ihr Muster sinnvoll ist. Die Vorlage enthält Kommentare, die Sie beim Hinzufügen der verschiedenen Teile an den entsprechenden Stellen leiten.

Die wichtigen Teile dieser Vorlage sind wie folgt:

- Es gibt ein Stylesheet für die Editor-Panels mit einigen grundlegenden Körperstilen und eine JavaScript-Datei für die Editor-Funktionalität. Lassen Sie diese Dateien unverändert.

- Der `<head>` enthält zwei Style-Blöcke. Der erste Style-Block ist für Elemente gedacht, die Leser nicht ändern müssen, um mit dem Beispiel zu experimentieren. Der zweite Style-Block enthält Elemente, die Leser möglicherweise spielen möchten. Normalerweise fügen wir unser gesamtes CSS in den ersten Block ein und wählen dann die Regeln aus, die in den zweiten Block verschoben werden sollen. Die Regeln im zweiten Block sollten diejenigen sein, die grundlegend für das Muster sind, vielleicht solche, bei denen ein Leser einen CSS-Wert ändern und das Update des Musters sehen kann.

- Sie müssen den HTML-Code für Ihre Komponente zweimal hinzufügen: zuerst innerhalb des Abschnitts mit der Klasse `preview` und dann innerhalb des `<textarea>` mit der Klasse `playable-html`.

- Das bearbeitbare CSS aus dem zweiten `<head>` Block muss auch in den `playable-css` Abschnitt kopiert werden.

Ein einfaches Arbeitsbeispiel ist [center.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html), das auf der Seite [Center an element](/de/docs/Web/CSS/Layout_cookbook/Center_an_element) eingebettet ist. Sie können dieses Beispiel verwenden, um zu sehen, wie Sie die verschiedenen Teile korrekt hinzufügen.

Wenn Sie das Repository geforkt haben und unsere CSS- und JavaScript-Dateien mit Ihrem Beispiel haben, sollte das Öffnen Ihres Live-Beispiels in einem Browser alles genau so anzeigen, wie es auf einer MDN-Seite erscheinen würde.

#### Nützliche Tipps

- Lassen Sie das CSS und HTML in den Textbereichen nicht einrücken; richten Sie stattdessen den Code mit dem Anfang der Zeilen aus. Dies sieht besser aus, wenn es gerendert wird.
- Wenn Bilder benötigt werden, legen Sie sie im Verzeichnis mit den Beispielen ab. Sie können gerne bereits vorhandene Bilder verwenden.
- Sie können die Höhe der Textbereiche anpassen, indem Sie die Höhe in den Inline-Stilen ändern.

### 3. Eine herunterladbare Version erstellen

Da die Beispiele unseren gesamten Live-Beispielcode enthalten, wollen wir den Lesern nur den Code zur Verfügung stellen, den sie für ihr Beispiel benötigen, und unnötige Elemente weglassen. Erstellen Sie eine Kopie Ihres Live-Beispiels und fügen Sie `--download` zu seinem Namen hinzu. Zum Beispiel ist die Download-Version von `center.html` `center--download.html`. Diese Datei wird ähnlich wie Ihr ursprüngliches Beispiel sein. Es sollte eine grundlegende Version Ihres Musters als einzelne HTML-Seite sein.

Es kann hilfreich sein, die CSS-Regeln für den Körper aus unserem enthaltenen Stylesheet einzubeziehen. Werfen Sie einen Blick auf [`cookbook-template--download.html`](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html) als Anleitung; diese Regeln werden als Ausgangspunkt bereitgestellt.

### 4. Einen Pull Request mit Ihrem Beispiel öffnen

Öffnen Sie einen Pull Request (PR) im [CSS Examples Repository](https://github.com/mdn/css-examples/pulls). Auf diese Weise können wir Ihnen bei etwaigen Änderungen am Beispiel helfen, die möglicherweise vor der Erstellung Ihrer Seite erforderlich sind. Außerdem muss das Beispiel live sein, um eingeschlossen zu werden. Deshalb ist es sinnvoll, zuerst die Codebeispiele und dann die erklärende Anleitung zu erstellen. Erklären Sie in Ihrem PR das Muster und was Sie demonstrieren. Sehen Sie sich unsere [Richtlinien zum Öffnen eines Pull Requests](/de/docs/MDN/Community/Pull_requests#open_a_pull_request) an.

### 5. Ihre Seite erstellen

Nachdem Ihr Beispiel-PR gemergt wurde, öffnen Sie einen Pull Request, um eine neue Seite im [Layout-Kochbuch-Verzeichnis](https://github.com/mdn/content/tree/main/files/en-us/web/css/layout_cookbook) zu erstellen.
Verwenden Sie unsere [Vorlage für Cookbook-Seiten](https://github.com/mdn/content/blob/main/files/en-us/web/css/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1).
Die Vorlage erklärt die Anforderungen für jeden Abschnitt, und Sie können sich auf andere Kochbuch-Beispiele beziehen, um weitere Hilfe zu erhalten.

Denken Sie daran, einen Link zu Ihrem neuen Recipe auf der Hauptseite des [Layout-Kochbuchs](/de/docs/Web/CSS/Layout_cookbook) hinzuzufügen.

Wenn Sie Fragen haben oder möchten, dass jemand einen Blick auf Ihre Seite wirft, setzen Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) mit uns in Verbindung.

## Siehe auch

- [Vorlage für Cookbook-Seiten](/de/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS Examples Repository](https://github.com/mdn/css-examples)
