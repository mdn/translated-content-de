---
title: Wie Sie eine Technologie recherchieren
slug: MDN/Writing_guidelines/Howto/Research_technology
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Dieser Artikel gibt Ihnen nützliche Informationen darüber, wie Sie Technologien dokumentieren können.

## Die Vorbereitungsarbeit

Bevor Sie mit der Dokumentation oder Aktualisierung auf den MDN Web Docs beginnen, gibt es einige Dinge, die Sie vorbereiten und planen sollten, bevor Sie tatsächlich mit dem Schreiben beginnen.

Es wird vorausgesetzt, dass Sie vor dem Lesen dieses Leitfadens ein angemessenes Wissen über:

- Webtechnologien wie HTML, CSS und JavaScript haben.
- Das Lesen von Webtechnologie-Spezifikationen. Sie werden diese häufig betrachten, während Sie APIs dokumentieren.

Alles andere kann im Laufe der Zeit erlernt werden.

### Ressourcen überprüfen

Nützliche Ressourcen für das Schreiben von Dokumentationen umfassen:

1. Die [Anleitungen](/de/docs/MDN/Writing_guidelines/Howto) für MDN Web Docs: Sie sind bereits hier, aber es ist gut, alle Artikel durchzusehen und sich mit unserem Schreibstil, den verschiedenen Seitentypen und den darin enthaltenen Abschnitten sowie den verschiedenen Möglichkeiten, wie wir unterschiedliche Teile der Seite einbinden (wie Spezifikationen und Browserkompatibilität), vertraut zu machen.
2. Die neueste Spezifikation: Verschiedene Standardisierungsgremien erstellen Spezifikationen für Technologien, die auf den MDN Web Docs dokumentiert sind. Zum Beispiel erstellt [TC39](https://tc39.es/) für JavaScript, die [WHATWG](https://whatwg.org/) für HTML und die [W3C](https://www.w3.org/) für CSS, XML und einige Web-APIs. Spezifikationen sind von den Referenzseiten auf den MDN Web Docs verlinkt (überprüfen Sie den Abschnitt "Specifications"). Alternativ können Sie normalerweise eine Websuche durchführen. Arbeiten Sie immer mit der neuesten, aktuellsten Spezifikation.
3. Die neuesten modernen Webbrowser: Diese sollten experimentelle/Alpha-Builds wie [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly), [Chrome Canary](https://www.google.com/intl/en/chrome/canary/) oder [Safari Technology Preview](https://webkit.org/downloads/) sein, die eher die von Ihnen zu dokumentierenden Funktionen unterstützen. Dies ist besonders relevant, wenn Sie eine Funktion dokumentieren, die "bevorstehend" ist.
4. Demos/Blogposts/andere Informationen: Finden Sie so viele Informationen wie möglich. Wenn Sie eine Technologie aktualisieren, weil sie sich verändert hat, stellen Sie sicher, dass die Ressourcen, die Sie zum Lernen verwenden, nicht veraltet sind. Deshalb sind die ersten beiden Punkte oben wichtig.

Es kann auch ratsam sein, jemanden zu finden, der bei Fragen helfen kann. Dies können die Spezifikationsautoren oder die Ingenieure sein, die Browserfunktionen implementieren.

### Lesen von Spezifikationen

Dies kann sich zu Beginn etwas fremd anfühlen, aber je mehr Sie es tun, desto mehr gewöhnen Sie sich daran. Hier sind einige gute Links, um Ihnen den Einstieg zu erleichtern:

- [How to read W3C specs](https://alistapart.com/article/readspec/) von J. David Eisenberg auf A List Apart
- [Understanding the CSS specifications](https://www.w3.org/Style/CSS/read) von der w3c
- [How to read web specs part I – or: WebVR, how do you work?](https://surma.dev/things/reading-specs/) behandelt im Speziellen das Lesen der WebVR-Spezifikation, ist jedoch eine großartige Einführung in das Lesen von Web-API-Spezifikationen.
- [How to read web specs part IIa – or: ECMAScript Symbols](https://surma.dev/things/reading-specs-2/) der zweite Teil des obigen Links enthält Informationen zum Verstehen der ECMAScript-Spezifikation, die die JavaScript-Sprache umreißt.

Zusätzlich haben wir den Leitfaden [Informationen, die in einer WebIDL-Datei enthalten sind](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file), der beim Lesen von Web-API-Spezifikationen wirklich helfen kann.

## Erforschung der Funktion

Sie werden viele Male im Laufe der Dokumentation einer Technologie zum Schreiben von Codebeispielen oder zum Erstellen von Demos zurückkehren, aber es ist sehr nützlich, sich zuerst mit der Funktionsweise der Technologie vertraut zu machen. Dies ist eine wirklich wertvolle Übung, da es Ihnen ein gutes Verständnis für die Anwendungsfälle gibt (_warum_ ein Entwickler diese Technologie nutzen würde) und gleichzeitig bei der Erstellung einiger Codebeispiele hilft.

> [!NOTE]
> Wenn die Spezifikation kürzlich aktualisiert wurde und zum Beispiel eine Methode jetzt anders definiert ist, die alte Methode jedoch in Browsern weiterhin funktioniert, müssen Sie oft beide an derselben Stelle dokumentieren, damit die alten und neuen Methoden abgedeckt sind.
> Wenn Sie Hilfe benötigen, beziehen Sie sich auf gefundene Demos oder fragen Sie einen technischen Kontakt.

## Erstellen der Liste der zu schreibenden oder zu aktualisierenden Seiten

Die verschiedenen Seiten, die Sie von Grund auf neu schreiben oder aktualisieren müssen, variieren je nach der Technologie, über die Sie schreiben. Schauen Sie sich die [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) und den relevanten Abschnitt für die Technologie an, die Sie dokumentieren. Sie müssen höchstwahrscheinlich auch bestehende Dokumentationen aktualisieren, also suchen Sie auf den MDN Web Docs nach Seiten, die mit dem, was Sie schreiben, in Zusammenhang stehen.

### Seitenleisten

Es ist möglich, dass auch die Seitenleiste der Seiten, die Sie schreiben, definiert oder aktualisiert werden muss. Um herauszufinden, ob dies erforderlich ist und wie Sie es tun, sehen Sie sich den [Leitfaden für Seitenleisten](/de/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) an.

### Codebeispiele

Einige der Codebeispiele für MDN Web Docs werden in separaten Repositories gehalten. Insbesondere sind dies die interaktiven Beispiele, die im Abschnitt "Versuchen Sie es" auf den Referenzseiten erscheinen, und der größere Democode, der für Anleitungen benötigt wird. Wenn Sie einem dieser Repositories etwas hinzufügen oder es ändern müssen, ist es eine gute Idee, es in Ihrer Liste zu notieren.

Der Artikel [Codebeispiele](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples) beschreibt die verschiedenen Arten von Codebeispielen, die wir auf den MDN Web Docs verwenden.

### Beispiel

Angenommen, Sie dokumentieren eine neue Web-API, dann könnte Ihre erste Liste der zu dokumentierenden Abschnitte folgendermaßen aussehen:

1. Übersichtsseite
2. Schnittstellenseiten
3. Konstruktorseiten
4. Methodenseiten
5. Eigenschaftsseiten
6. Ereignisseiten
7. Konzept-/Leitfaden-Seiten
8. Codebeispiele
9. Seitenleisten

Sie können dies dann mit weiteren Details erweitern, indem Sie jede Schnittstelle und deren Mitglieder hinzufügen. Wenn Sie zum Beispiel die Web Audio API dokumentieren, könnte Ihre Liste mehr so aussehen:

- Web_Audio_API
- AudioContext

  - AudioContext.currentTime
  - AudioContext.destination
  - AudioContext.listener
  - ...
  - AudioContext.createBuffer()
  - AudioContext.createBufferSource()
  - ...

- AudioNode

  - AudioNode.context
  - AudioNode.numberOfInputs
  - AudioNode.numberOfOutputs
  - ...
  - AudioNode.connect(Param)
  - ...

- AudioParam
- Ereignisse (Liste aktualisieren)

  - start
  - end
  - …

## Ein Issue eröffnen

Es ist jetzt eine gute Idee, ein Tracking-[Issue](https://github.com/mdn/content/issues) im `mdn/content` Repository zu eröffnen, mit den aufgelisteten Seiten als To-Do (Checkboxen)-Liste. Dies ermöglicht nicht nur Ihnen, sondern auch anderen, die an der Dokumentation arbeiten, den Status öffentlich nachzuverfolgen. Sie können auch Ihre Pull Requests mit diesem Issue verlinken, um allen mehr Kontext zu geben.

## Erstellen der Seiten

Erstellen Sie nun die benötigten Seiten. Um eine neue Seite zu erstellen, lesen Sie die Anweisungen in unserem [How to create, move, delete, and edit pages](/de/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting) Leitfaden. Schauen Sie sich unseren [Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types) Leitfaden für Seitentemplates an, die nützlich sein könnten.
