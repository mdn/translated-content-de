---
title: Ein Rezept beitragen
slug: Web/CSS/Layout_cookbook/Contribute_a_recipe
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Wenn Sie ein Beispiel für das Layout-Kochbuch beitragen möchten, erklärt diese Seite die Schritte, die Sie unternehmen müssen, um Ihr Beispiel zu veröffentlichen.

## Was macht ein gutes Rezept aus?

**Die einfachstmögliche Version eines nützlichen Webdesign-Musters.** Jede Zeile CSS, die Sie hinzufügen, sollte dazu dienen, das Muster zu demonstrieren, lassen Sie also alles weg, was ausschließlich dazu dient, das Beispiel optisch ansprechend zu machen. Die Idee ist, dass jemand das Muster nehmen und es in einer Website mit eigenen Stilen verwenden kann.

Ein Rezept besteht aus:

- Einem Live-Beispiel, gespeichert im [CSS Examples GitHub Repo](https://github.com/mdn/css-examples).
- Einer herunterladbaren Version dieses Beispiels, ebenfalls im CSS Examples Repo gespeichert.
- Einer Seite im Abschnitt [CSS Layout Kochbuch](/de/docs/Web/CSS/Layout_cookbook) der Website, die folgende Komponenten enthalten sollte:
  1. Einführung
  2. Anforderungen
  3. Rezept
  4. Entscheidungen
  5. Nützliche Fallbacks oder alternative Methoden (falls relevant)
  6. Barrierefreiheit
  7. Browser-Kompatibilität (nur für CSS-Eigenschaften, die nicht vollständig unterstützt werden)
  8. Zusätzliche Ressourcen

## Schritte zur Veröffentlichung eines Rezepts

Um ein Rezept zu erstellen und es dem CSS Layout Kochbuch hinzuzufügen, folgen Sie diesen Schritten:

1. [Ein Muster erstellen](#1._ein_muster_erstellen)
2. [Ein Live-Beispiel erstellen](#2._ein_live-beispiel_erstellen)
3. [Eine herunterladbare Version erstellen](#3._eine_herunterladbare_version_erstellen)
4. [Einen Pull Request mit Ihrem Beispiel eröffnen](#4._einen_pull_request_mit_ihrem_beispiel_eröffnen)
5. [Ihre Seite erstellen](#5._ihre_seite_erstellen)

### 1. Ein Muster erstellen

Bevor Sie Ihr Beispiel in ein Rezept verwandeln, beginnen Sie damit, Ihr Muster als einfache HTML-Seite zu erstellen. Denken Sie darüber nach, was Sie demonstrieren möchten, und halten Sie es so einfach wie möglich. Verwenden Sie beschreibende Wörter wie "container" oder "item", wenn Sie Klassen-Namen hinzufügen.

Stellen Sie sicher, dass Sie das HTML und CSS in mehreren Browsern, Ansichtsgrößen und Geräten getestet haben. Stellen Sie außerdem sicher, dass alle CSS-Stile den Barrierefreiheitsrichtlinien entsprechen. Während es in Ordnung ist, CSS-Eigenschaften mit begrenzter Unterstützung zu verwenden, sollten Sie bei der Erstellung der Seite Informationen zur Browser-Unterstützung einfügen, insbesondere im Abschnitt der Browser-Kompatibilität. In einigen Fällen kann es hilfreich sein, eine zweite Version Ihres Beispiels mit Fallback-Unterstützung zu erstellen.

### 2. Ein Live-Beispiel erstellen

Die Live-Beispiele auf Kochbuchseiten, wie bei [einem Element zentrieren](/de/docs/Web/CSS/Layout_cookbook/Center_an_element), und an anderen Orten auf MDN ermöglichen es Lesern, mit dem Code zu spielen und relevante Teile zu ändern, ohne von dem gesamten Code überwältigt zu werden. Ihr Rezept wird durch ein oder mehrere Beispiele demonstriert.

Forken Sie das [CSS Examples Repo](https://github.com/mdn/css-examples) und schauen Sie dann im Ordner `css-cookbook` nach. Dort finden Sie die Datei [cookbook-template.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html). Kopieren Sie diese Datei und verwenden Sie sie als Ausgangspunkt. Speichern Sie sie im Verzeichnis `css-cookbook` unter einem Namen, der für Ihr Muster sinnvoll ist. Die Vorlage enthält Kommentare, die Sie beim Hinzufügen der verschiedenen Teile an den entsprechenden Stellen anleiten.

Die wichtigen Teile dieser Vorlage sind wie folgt:

- Es gibt ein Stylesheet für die Editor-Panels mit einigen grundlegenden Body-Stilen und eine JavaScript-Datei für die Editor-Funktionalität. Lassen Sie diese Dateien unverändert.

- Der `<head>` enthält zwei Style-Blöcke. Der erste Style-Block ist für Elemente, die Leser nicht ändern müssen, um mit dem Beispiel zu spielen. Der zweite Style-Block enthält Elemente, die Leser möglicherweise ändern möchten. Normalerweise fügen wir alle unsere CSS-Regeln in den ersten Block ein und wählen dann die Regeln aus, die in den zweiten verschoben werden sollen. Die Regeln im zweiten Block sollten diejenigen sein, die grundlegend für das Muster sind, vielleicht diejenigen, bei denen ein Leser einen CSS-Wert ändern kann und das Muster aktualisiert sieht.

- Sie müssen das HTML für Ihre Komponente zweimal hinzufügen: zuerst innerhalb des Abschnitts mit der Klasse `preview` und dann innerhalb der `<textarea>` mit der Klasse `playable-html`.

- Das bearbeitbare CSS aus dem zweiten `<head>` Block muss auch in den Bereich `playable-css` kopiert werden.

Ein funktionierendes Beispiel ist [center.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html), das auf der Seite [Ein Element zentrieren](/de/docs/Web/CSS/Layout_cookbook/Center_an_element) eingebettet ist. Sie können es verwenden, um zu sehen, wie die verschiedenen Teile korrekt hinzugefügt werden.

Wenn Sie das Repo geforkt haben und unsere CSS- und JavaScript-Dateien mit Ihrem Beispiel eingebunden sind, sollte beim Öffnen Ihres Live-Beispiels in einem Browser alles genau so angezeigt werden, wie es auf einer MDN-Seite erscheinen würde.

#### Nützliche Tipps

- Nehmen Sie keine Einrückungen im CSS und HTML innerhalb der Textbereiche vor; richten Sie den Code stattdessen mit dem Anfang der Zeilen aus. Dies sieht besser aus, wenn es gerendert wird.
- Wenn Bilder benötigt werden, legen Sie diese im Verzeichnis mit den Beispielen ab. Sie können gerne vorhandene Bilder verwenden.
- Sie können die Höhe der Textbereiche anpassen, indem Sie die Höhe in den Inline-Stilen ändern.

### 3. Eine herunterladbare Version erstellen

Da die Beispiele den gesamten Code unseres Live-Beispiels enthalten, möchten wir den Lesern nur den Code bereitstellen, den sie für ihr Beispiel benötigen, und unnötige Elemente weglassen. Erstellen Sie eine Kopie Ihres Live-Beispiels und fügen Sie `--download` zu seinem Namen hinzu. Zum Beispiel ist die Download-Version von `center.html` `center--download.html`. Diese Datei wird Ihrem ursprünglichen Beispiel ähneln. Sie sollte eine grundlegende Version Ihres Musters als einzelne HTML-Seite sein.

Es kann nützlich sein, die Body-CSS-Regeln aus unserem enthaltenen Stylesheet einzuschließen. Schauen Sie sich [`cookbook-template--download.html`](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html) als Leitfaden an; diese Regeln werden als Ausgangspunkt bereitgestellt.

### 4. Einen Pull Request mit Ihrem Beispiel eröffnen

Öffnen Sie einen Pull Request (PR) auf dem [CSS Examples Repo](https://github.com/mdn/css-examples/pulls). Dies ermöglicht es uns, Ihnen bei eventuellen Änderungen am Beispiel zu helfen, die erforderlich sein könnten, bevor Sie Ihre Seite erstellen. Außerdem muss das Beispiel live sein, um aufgenommen zu werden. Deshalb ergibt es Sinn, zuerst die Code-Beispiele und dann den erklärenden Leitfaden zu erstellen. Erklären Sie in Ihrem PR das Muster und was Sie demonstrieren. Siehe unsere [Richtlinien zum Öffnen eines Pull Requests](/de/docs/MDN/Community/Pull_requests#open_a_pull_request).

### 5. Ihre Seite erstellen

Nachdem Ihr Beispiel-PR gemerged wurde, öffnen Sie einen Pull Request, um eine neue Seite im [Layout Cookbook-Verzeichnis](https://github.com/mdn/content/tree/main/files/en-us/web/css/layout_cookbook) zu erstellen. Verwenden Sie unsere [Vorlage für Cookbook-Seiten](https://github.com/mdn/content/blob/main/files/en-us/web/css/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1). Die Vorlage erklärt die Anforderungen jedes Abschnitts, und Sie können sich an anderen Cookbook-Beispielen orientieren, um weitere Hilfe zu erhalten.

Denken Sie daran, einen Link zu Ihrem neuen Rezept auf der Hauptseite des [Layout-Kochbuchs](/de/docs/Web/CSS/Layout_cookbook) hinzuzufügen.

Wenn Sie Fragen haben oder möchten, dass jemand Ihre Seite überprüft, nehmen Sie über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) Kontakt auf.

## Siehe auch

- [Cookbook-Seitenvorlage](/de/docs/Web/CSS/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS Examples Repo](https://github.com/mdn/css-examples)
