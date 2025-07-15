---
title: Ein Rezept beitragen
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Wenn Sie ein Beispiel für das Layout-Kochbuch beitragen möchten, dann erklärt Ihnen diese Seite die Schritte, wie Ihr Beispiel veröffentlicht werden kann.

## Was macht ein gutes Rezept aus?

**Die einfachste mögliche Version eines nützlichen Webdesign-Musters**. Jede Zeile CSS, die Sie einfügen, sollte dazu dienen, das Muster zu demonstrieren. Lassen Sie alles weg, was rein dazu dient, das Beispiel hübsch aussehen zu lassen. Die Idee ist, dass jemand das Muster nehmen und es auf einer Website mit eigenen Stilen verwenden kann.

Ein Rezept besteht aus:

- Einem Live-Beispiel, das im [CSS Examples GitHub Repo](https://github.com/mdn/css-examples) gespeichert ist.
- Einer herunterladbaren Version dieses Beispiels, ebenfalls im CSS Examples Repo gespeichert.
- Einer Seite im Abschnitt des [CSS Layout Kochbuchs](/de/docs/Web/CSS/Layout_cookbook) der Website, die folgende Komponenten enthalten sollte:
  1. Einführung
  2. Anforderungen
  3. Rezept
  4. Entscheidungen
  5. Nützliche Fallbacks oder alternative Methoden (wenn relevant)
  6. Barrierefreiheitserwägungen
  7. Browser-Kompatibilität (nur für CSS-Eigenschaften, die nicht vollständig unterstützt werden)
  8. Zusätzliche Ressourcen

## Schritte, um ein Rezept zu veröffentlichen

Um ein Rezept zu erstellen und es dem CSS Layout Kochbuch hinzuzufügen, folgen Sie diesen Schritten:

1. [Ein Muster erstellen](#1._ein_muster_erstellen)
2. [Ein Live-Beispiel erstellen](#2._ein_live-beispiel_erstellen)
3. [Eine herunterladbare Version erstellen](#3._eine_herunterladbare_version_erstellen)
4. [Einen Pull Request mit Ihrem Beispiel eröffnen](#4._einen_pull_request_mit_ihrem_beispiel_eröffnen)
5. [Ihre Seite erstellen](#5._ihre_seite_erstellen)

### 1. Ein Muster erstellen

Bevor Sie Ihr Beispiel in ein Rezept umwandeln, beginnen Sie damit, Ihr Muster als grundlegende HTML-Seite zu erstellen. Denken Sie darüber nach, was Sie demonstrieren möchten, und halten Sie es so einfach wie möglich. Verwenden Sie beschreibende Wörter wie "container" oder "item", falls Sie Klassennamen hinzufügen.

Stellen Sie sicher, dass Sie das HTML und CSS in mehreren Browsern, mit verschiedenen Ansichtsgrößen und auf unterschiedlichen Geräten getestet haben. Achten Sie auch darauf, dass alle CSS-Stylings den Zugänglichkeitsrichtlinien folgen. Es ist in Ordnung, CSS-Eigenschaften mit eingeschränktem Support zu verwenden, aber stellen Sie sicher, dass Sie Informationen zur Browserunterstützung angeben, insbesondere im Abschnitt zur Browser-Kompatibilität. In einigen Fällen kann es hilfreich sein, eine zweite Version Ihres Beispiels mit Fallback-Unterstützung zu erstellen.

### 2. Ein Live-Beispiel erstellen

Die Live-Beispiele auf Kochbuchseiten, wie zum Beispiel für das [Zentrieren eines Elements](/de/docs/Web/CSS/Layout_cookbook/Center_an_element), und anderswo auf MDN ermöglichen es den Lesern, mit dem Code zu spielen und relevante Teile zu ändern, ohne von all dem Code überwältigt zu werden. Ihr Rezept wird durch ein oder mehrere Beispiele demonstriert.

Gabeln Sie das [CSS Examples Repo](https://github.com/mdn/css-examples) und werfen Sie dann einen Blick in den Ordner `css-cookbook`. Dort gibt es eine Datei [cookbook-template.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html). Kopieren Sie diese Datei und verwenden Sie sie als Ausgangspunkt. Speichern Sie sie im Verzeichnis `css-cookbook` unter einem Namen, der für Ihr Muster Sinn ergibt. Die Vorlage enthält Kommentare, die Sie beim Hinzufügen verschiedener Teile an den richtigen Stellen leiten.

Die wichtigen Teile dieser Vorlage sind wie folgt:

- Es gibt ein Stylesheet für die Editor-Panels mit einem grundlegenden Body-Styling und eine JavaScript-Datei für die Editor-Funktionalität. Lassen Sie diese Dateien unverändert.

- Der `<head>`-Bereich enthält zwei Style-Blöcke. Der erste Style-Block ist für Elemente gedacht, die die Leser nicht ändern müssen, um mit dem Beispiel zu spielen. Der zweite Style-Block enthält Elemente, die die Leser ändern könnten. Wir fügen typischerweise all unser CSS dem ersten Block hinzu und wählen dann die Regeln aus, die wir in den zweiten Block verschieben. Die Regeln im zweiten Block sollten diejenigen sein, die grundlegend für das Muster sind, vielleicht solche, bei denen ein Leser einen CSS-Wert ändern und sehen kann, wie sich das Muster aktualisiert.

- Sie müssen das HTML für Ihre Komponente zweimal hinzufügen: zuerst innerhalb des Abschnitts mit der Klasse `preview` und dann im `<textarea>` mit der Klasse `playable-html`.

- Das editierbare CSS aus dem zweiten `<head>`-Block muss ebenfalls in den `playable-css` Abschnitt kopiert werden.

Ein funktionierendes Beispiel ist [center.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html), das auf der Seite [Center an element](/de/docs/Web/CSS/Layout_cookbook/Center_an_element) eingebettet ist. Sie können dieses Beispiel verwenden, um zu sehen, wie Sie die verschiedenen Teile korrekt hinzufügen.

Wenn Sie das Repo gegabelt haben und unsere CSS- und JavaScript-Dateien mit Ihrem Beispiel verwenden, sollte das Öffnen Ihres Live-Beispiels in einem Browser alles genau so anzeigen, wie es auf einer MDN-Seite erscheinen würde.

#### Nützliche Tipps

- Indentieren Sie das CSS und HTML in den Textbereichen nicht; richten Sie stattdessen den Code am Anfang der Zeilen aus. Dies sieht besser aus, wenn es gerendert wird.
- Wenn Bilder erforderlich sind, legen Sie sie im Verzeichnis mit den Beispielen ab. Sie können gerne vorhandene Bilder verwenden.
- Sie können die Höhe der Textbereiche anpassen, indem Sie die Höhe in den Inline-Stilen ändern.

### 3. Eine herunterladbare Version erstellen

Da die Beispiele all unseren Live-Beispielcode enthalten, möchten wir den Lesern nur den Code zur Verfügung stellen, den sie für ihr Beispiel benötigen, und unnötige Bestandteile weglassen. Erstellen Sie eine Kopie Ihres Live-Beispiels und fügen Sie `--download` zu seinem Namen hinzu. Zum Beispiel ist die Download-Version von `center.html` `center--download.html`. Diese Datei sollte eine einfache Version Ihres Musters als einzelne HTML-Seite sein.

Es kann hilfreich sein, die Body-CSS-Regeln aus unserem enthaltenen Stylesheet hinzuzufügen. Schauen Sie sich an, wie es in [`cookbook-template--download.html`](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html) gemacht ist; diese Regeln werden als Ausgangspunkt bereitgestellt.

### 4. Einen Pull Request mit Ihrem Beispiel eröffnen

Öffnen Sie einen Pull Request (PR) im [CSS Examples Repo](https://github.com/mdn/css-examples/pulls). Dies ermöglicht es uns, Ihnen bei etwaigen Änderungen am Beispiel zu helfen, die erforderlich sein könnten, bevor Sie Ihre Seite erstellen. Außerdem muss das Beispiel live sein, um eingebunden werden zu können. Aus diesem Grund ist es sinnvoll, zuerst die Codebeispiele zu erstellen und dann den erklärenden Leitfaden. In Ihrem PR erklären Sie das Muster und was Sie demonstrieren. Siehe unsere [Richtlinien für das Eröffnen eines Pull Requests](/de/docs/MDN/Community/Pull_requests#open_a_pull_request).

### 5. Ihre Seite erstellen

Nachdem Ihr Beispiel PR gemergt wurde, öffnen Sie einen Pull Request, um eine neue Seite im [Layout Cookbook-Verzeichnis](https://github.com/mdn/content/tree/main/files/en-us/web/css/layout_cookbook) zu erstellen. Verwenden Sie unsere [Vorlage für Kochbuchseiten](https://github.com/mdn/content/blob/main/files/en-us/web/css/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1). Die Vorlage erklärt die Anforderungen für jeden Abschnitt und Sie können andere Kochbuchbeispiele zur weiteren Hilfe heranziehen.

Denken Sie daran, einen Link zu Ihrem neuen Rezept auf der Hauptseite des [Layout Kochbuchs](/de/docs/Web/CSS/Layout_cookbook) hinzuzufügen.

Wenn Sie Fragen haben oder möchten, dass jemand einen Blick auf Ihre Seite wirft, wenden Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns.

## Siehe auch

- [Kochbuchseiten-Vorlage](/de/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS Examples Repo](https://github.com/mdn/css-examples)
