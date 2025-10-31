---
title: Ein Rezept beitragen
slug: Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

Wenn Sie ein Beispiel für das Layout-Kochbuch beisteuern möchten, erklärt diese Seite die Schritte, die Sie unternehmen müssen, um Ihr Beispiel zu veröffentlichen.

## Was macht ein gutes Rezept aus?

**Die einfachstmögliche Version eines nützlichen Webdesign-Musters.** Jede Zeile CSS, die Sie einfügen, sollte dazu dienen, das Muster zu demonstrieren. Lassen Sie alles weg, was nur dem ästhetischen Erscheinungsbild dient. Die Idee ist, dass jemand das Muster nehmen und es mit eigenen Stilen auf einer Website verwenden kann.

Ein Rezept besteht aus:

- Einem Live-Beispiel, das im [CSS Examples GitHub-Repository](https://github.com/mdn/css-examples) gespeichert ist.
- Einer herunterladbaren Version dieses Beispiels, ebenfalls im CSS Examples-Repository gespeichert.
- Einer Seite im Abschnitt [CSS Layout-Kochbuch](/de/docs/Web/CSS/How_to/Layout_cookbook) der Website, die die folgenden Komponenten enthalten sollte:
  1. Einführung
  2. Anforderungen
  3. Rezept
  4. Entscheidungen
  5. Nützliche Fallbacks oder alternative Methoden (falls relevant)
  6. Barrierefreiheit
  7. Browser-Kompatibilität (nur für CSS-Eigenschaften, die nicht vollständig unterstützt werden)
  8. Zusätzliche Ressourcen

## Schritte, um ein Rezept zu veröffentlichen

Um ein Rezept zu erstellen und es zum CSS Layout-Kochbuch hinzuzufügen, folgen Sie diesen Schritten:

- [Was macht ein gutes Rezept aus?](#what_makes_a_good_recipe)
- [Schritte, um ein Rezept zu veröffentlichen](#schritte,_um_ein_rezept_zu_veröffentlichen)
  - [1. Muster entwickeln](#1._muster_entwickeln)
  - [2. Ein Live-Beispiel erstellen](#2._ein_live-beispiel_erstellen)
  - [3. Eine herunterladbare Version erstellen](#3._eine_herunterladbare_version_erstellen)
  - [4. Einen Pull-Request mit Ihrem Beispiel öffnen](#4._einen_pull-request_mit_ihrem_beispiel_öffnen)
  - [5. Ihre Seite erstellen](#5._ihre_seite_erstellen)

### 1. Muster entwickeln

Bevor Sie Ihr Beispiel in ein Rezept verwandeln, beginnen Sie damit, ein grundlegendes HTML-Seite zu erstellen. Überlegen Sie, was Sie demonstrieren möchten, und halten Sie es so einfach wie möglich. Verwenden Sie beschreibende Wörter wie "container" oder "item", wenn Sie Klassennamen hinzufügen.

Stellen Sie sicher, dass Sie das HTML und CSS in mehreren Browsern, Ansichtsfenstern und Geräten getestet haben. Achten Sie auch darauf, dass jegliche CSS-Stilgebung den Barrierefreiheitsrichtlinien folgt. Es ist in Ordnung, CSS-Eigenschaften mit eingeschränkter Unterstützung zu verwenden, aber achten Sie darauf, Informationen zur Browser-Unterstützung bereitzustellen, insbesondere im Abschnitt zur Browser-Kompatibilität. In einigen Fällen kann es hilfreich sein, eine zweite Version Ihres Beispiels mit Fallback-Unterstützung zu erstellen.

### 2. Ein Live-Beispiel erstellen

Die Live-Beispiele auf den Kochbuchseiten, wie zum Beispiel für das [Zentrieren eines Elements](/de/docs/Web/CSS/How_to/Layout_cookbook/Center_an_element), und anderswo auf MDN ermöglichen es den Lesern, mit dem Code zu spielen und relevante Teile zu ändern, ohne von all dem Code überwältigt zu werden. Ihr Rezept wird anhand eines oder mehrerer Beispiele demonstriert.

Forken Sie das [CSS Examples Repository](https://github.com/mdn/css-examples) und werfen Sie einen Blick in den Ordner `css-cookbook`. Dort gibt es eine [cookbook-template.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template.html)-Datei. Kopieren Sie diese Datei und verwenden Sie sie als Ausgangspunkt. Speichern Sie dies im Verzeichnis `css-cookbook` mit einem Namen, der für Ihr Muster sinnvoll ist. Die Vorlage enthält Kommentare, die Sie bei der Hinzufügung der verschiedenen Teile an den entsprechenden Stellen leiten.

Die wichtigen Teile dieser Vorlage sind wie folgt:

- Es gibt ein Stylesheet für die Editor-Panels mit grundlegender Körperstilgebung und eine JavaScript-Datei für die Editor-Funktionalität. Lassen Sie diese Dateien unverändert.

- Der `<head>` enthält zwei Stilblöcke. Der erste Stilblock ist für Elemente, die die Leser nicht ändern müssen, um mit dem Beispiel zu spielen. Der zweite Stilblock enthält Elemente, die Leser möglicherweise verändern möchten. Normalerweise fügen wir all unser CSS in den ersten Block ein und wählen dann die Regeln aus, die in den zweiten Block verschoben werden sollen. Die Regeln im zweiten Block sollten diejenigen sein, die grundlegend für das Muster sind, möglicherweise diejenigen, bei denen ein Leser einen CSS-Wert ändern kann, um das Muster zu aktualisieren.

- Sie müssen das HTML für Ihre Komponente zweimal hinzufügen: zuerst innerhalb des Abschnitts mit der Klasse `preview`, und dann innerhalb des `<textarea>` mit der Klasse `playable-html`.

- Das bearbeitbare CSS aus dem zweiten `<head>`- Block muss auch in den Abschnitt `playable-css` kopiert werden.

Ein funktionierendes Beispiel ist [center.html](https://github.com/mdn/css-examples/blob/main/css-cookbook/center.html), das auf der Seite [Zentrieren eines Elements](/de/docs/Web/CSS/How_to/Layout_cookbook/Center_an_element) eingebettet ist. Sie können dies verwenden, um zu sehen, wie Sie die verschiedenen Teile korrekt hinzufügen.

Wenn Sie das Repo geforkt haben und unsere CSS- und JavaScript-Dateien mit Ihrem Beispiel vorliegen, sollte das Öffnen Ihres Live-Beispiels in einem Browser alles genau so darstellen, wie es auf einer MDN-Seite erscheinen würde.

#### Nützliche Tipps

- Rücken Sie das CSS und HTML innerhalb der Textbereiche nicht ein; richten Sie den Code stattdessen mit dem Zeilenanfang aus. Dies sieht besser aus, wenn es gerendert wird.
- Falls Bilder erforderlich sind, legen Sie diese in das Verzeichnis mit den Beispielen. Sie können gerne bereits vorhandene Bilder verwenden.
- Sie können die Höhe der Textbereiche anpassen, indem Sie die Höhe in den Inline-Stilen ändern.

### 3. Eine herunterladbare Version erstellen

Da die Beispiele unseren gesamten Live-Beispielcode enthalten, möchten wir den Lesern nur den Code zur Verfügung stellen, den sie für ihr Beispiel benötigen, ohne unnötige Elemente. Erstellen Sie eine Kopie Ihres Live-Beispiels und fügen Sie `--download` zu seinem Namen hinzu. Zum Beispiel ist die Download-Version von `center.html` `center--download.html`. Diese Datei sollte Ihrer ursprünglichen Beispielversion ähnlich sein. Sie sollte eine grundlegende Version Ihres Musters als einzelne HTML-Seite sein.

Es kann hilfreich sein, die CSS-Regeln für den Körper aus unserem inkludierten Stylesheet einzubeziehen. Werfen Sie einen Blick auf [`cookbook-template--download.html`](https://github.com/mdn/css-examples/blob/main/css-cookbook/cookbook-template--download.html) als Anleitung; diese Regeln werden als Ausgangspunkt bereitgestellt.

### 4. Einen Pull-Request mit Ihrem Beispiel öffnen

Öffnen Sie einen Pull-Request (PR) im [CSS Examples Repository](https://github.com/mdn/css-examples/pulls). Dies erlaubt es uns, Ihnen bei erforderlichen Änderungen am Beispiel zu helfen, bevor Sie Ihre Seite erstellen. Außerdem muss das Beispiel live sein, um aufgenommen zu werden. Deshalb ist es sinnvoll, zuerst die Codebeispiele und dann den erläuternden Leitfaden zu erstellen. Erklären Sie in Ihrem PR das Muster und was Sie demonstrieren. Beachten Sie unsere [Richtlinien zum Öffnen eines Pull-Requests](/de/docs/MDN/Community/Pull_requests#open_a_pull_request).

### 5. Ihre Seite erstellen

Nachdem Ihr Beispiel-PR zusammengeführt wurde, öffnen Sie einen Pull-Request, um eine neue Seite im [Layout-Kochbuchverzeichnis](https://github.com/mdn/content/tree/main/files/en-us/web/css/how_to/layout_cookbook) zu erstellen. Verwenden Sie unsere [Vorlage für Kochbuchseiten](https://github.com/mdn/content/blob/main/files/en-us/web/css/how_to/layout_cookbook/contribute_a_recipe/cookbook_template/index.md?plain=1). Die Vorlage erklärt die Anforderungen für jeden Abschnitt, und Sie können sich für weitere Hilfe an anderen Kochbuchbeispielen orientieren.

Vergessen Sie nicht, einen Link zu Ihrem neuen Rezept auf der Hauptseite des [Layout-Kochbuchs](/de/docs/Web/CSS/How_to/Layout_cookbook) hinzuzufügen.

Wenn Sie Fragen haben oder möchten, dass jemand einen Blick auf Ihre Seite wirft, nehmen Sie über eines unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) Kontakt mit uns auf.

## Siehe auch

- [Vorlage für Kochbuchseiten](/de/docs/Web/CSS/How_to/Layout_cookbook/Contribute_a_recipe/Cookbook_template)
- [CSS Examples Repository](https://github.com/mdn/css-examples)
