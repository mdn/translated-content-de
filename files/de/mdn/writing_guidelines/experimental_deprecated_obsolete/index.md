---
title: Experimentell, veraltet und obsolet
slug: MDN/Writing_guidelines/Experimental_deprecated_obsolete
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Diese Begriffe sind häufig mit Technologien und Spezifikationen verbunden und werden in den MDN Web Docs verwendet, um den Status einer Technologie zu kennzeichnen. Für die Definition dieser Begriffe stimmen die MDN Web Docs mit dem [Browser-Kompatibilitätsdaten (BCD)](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)-Repository überein.
Diese Begriffe werden im Folgenden im Kontext ihrer Verwendung in den MDN Web Docs beschrieben.

## Experimentell

Wenn eine Technologie in den MDN Web Docs als experimentell beschrieben wird, bedeutet das, dass die Technologie neu und unreif ist und derzeit _im Prozess_ ist, zur Webplattform hinzugefügt zu werden (oder in Betracht gezogen wird, hinzugefügt zu werden).
Das Markieren einer Technologie als experimentell weist darauf hin, dass Leser sorgfältig überlegen sollten, bevor sie diese Technologie in einem Produktionsprojekt verwenden (d.h. ein Projekt, das nicht nur ein Demo oder Experiment ist). Leser werden [ermutigt, experimentelle Funktionen auszuprobieren](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) und Feedback an Browser-Anbieter und Standardautoren zu geben.

Für eine Technologie, die als **experimentell** gekennzeichnet ist, gelten eine oder mehrere der folgenden Bedingungen:

- Sie ist in der finalen Version **nur einer** modernen großen Browser-Rendering-Engine implementiert und standardmäßig aktiviert.
- Sie wird nur durch Konfigurationsänderungen wie Einstellungen oder Flags unterstützt, unabhängig von der Anzahl der unterstützten Rendering-Engines.
- Ihre definierende Spezifikation wird wahrscheinlich erheblich auf abwärtskompatible Weise geändert (d.h. sie könnte bestehenden Code, der sich auf die Funktion verlässt, brechen).

> [!NOTE]
> Eine Funktion, die nur auf einer Rendering-Engine veröffentlicht wird, gilt immer noch als experimentell, selbst wenn sie in Vorschauversionen anderer Rendering-Engines verfügbar ist (oder durch das Setzen einer Einstellung oder eines Flags).

Der **experimentelle** Status einer Technologie kann ablaufen, wenn eine oder mehrere der folgenden Bedingungen erfüllt sind:

- Sie wird standardmäßig in **zwei oder mehr** großen Browser-Rendering-Engines unterstützt.
- Sie wird standardmäßig von nur einer Browser-Rendering-Engine für zwei oder mehr Jahre unterstützt und erfährt keine wesentlichen Änderungen.
- Ihre definierende Spezifikation wird voraussichtlich nicht in einer Weise geändert, die die Kompatibilität bricht.

Für Beispiele dieser Bedingungen siehe die [experimentelle Kennzeichnung](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental) in der BCD-Dokumentation.

In der Regel wird, wenn eine Technologie über mehrere große Browser hinweg unterstützt wird, die Spezifikation stabil sein, aber das ist nicht immer der Fall.
Andererseits mögen einige Technologien eine stabile Spezifikation haben, aber keine native Unterstützung in Browsern. [IMSC](/de/docs/Related/IMSC) zum Beispiel wird über ein JavaScript-Polyfill verwendet.

Eine Funktion oder Technologie, die Teil eines aktiven Spezifikations- oder Standardisierungsprozesses ist und nicht als **veraltet** markiert ist, wird als auf einem **Standardsweg** befindlich bezeichnet.

## Veraltet

Der Begriff **veraltet** wird in den MDN Web Docs verwendet, um eine API oder Technologie zu kennzeichnen, die nicht mehr empfohlen wird. Eine veraltete API oder Technologie könnte in Zukunft entfernt werden oder nur zu Kompatibilitätszwecken beibehalten werden und könnte noch funktionieren. Wir empfehlen, die als veraltet markierte Funktionalität zu vermeiden.

Weitere Informationen zur Definition von **veraltet** finden Sie in der [veralteten Kennzeichnung](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated) der BCD-Dokumentation.

## Obsolet

In den MDN Web Docs wurde der Begriff **obsolet** historisch verwendet, um eine API oder Technologie anzuzeigen, die nicht nur nicht mehr empfohlen wird, sondern auch nicht mehr in Browsern implementiert ist.
Da die Unterscheidung zwischen **obsolet** und **veraltet** nicht sehr hilfreich ist, wird der Begriff **obsolet** in den MDN Web Docs nicht mehr verwendet.

> [!NOTE]
> Wenn Sie auf eine Instanz von **obsolet** stoßen, sollte sie entfernt oder durch den Begriff **veraltet** ersetzt werden.

## Richtlinien zum Entfernen von Inhalten

Manchmal werden während der Entwicklung einer neuen Spezifikation oder im Verlauf der Evolution lebender Standards wie HTML neue Elemente, Methoden, Eigenschaften usw. zur Spezifikation hinzugefügt, dort eine Weile behalten und dann entfernt. Manchmal geschieht dies sehr schnell, und manchmal verbleiben diese neuen Elemente für Monate oder sogar Jahre in der Spezifikation, bevor sie entfernt werden. Dies kann es schwierig machen zu entscheiden, wie mit der Entfernung des Elements aus der Spezifikation umgegangen werden soll.

Hier sind einige Richtlinien, die Ihnen bei der Entscheidung helfen, was zu tun ist, wenn etwas aus der Spezifikation entfernt wird.

> [!NOTE]
> Für die Zwecke dieser Diskussion wird das Wort "Element" verwendet, um alles zu bedeuten, was Teil einer Spezifikation sein kann: ein Element oder ein Attribut eines Elements, eine Schnittstelle oder eine beliebige einzelne Methode, eine Eigenschaft oder ein anderes Mitglied einer Schnittstelle usw.

### Wenn das Element nie implementiert wurde

Wenn das Element _nie_ in einer freigegebenen Version von _irgendeinem_ Browser implementiert wurde, nicht einmal hinter einer Einstellung oder einem Flag, löschen Sie alle Referenzen auf das Element aus der Dokumentation.

- Wenn das Element Dokumentationsseiten hat, die nur dieses eine Element beschreiben (wie z.B. [`RTCPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close)), löschen Sie diese Seite.
  Wenn das entfernte Element eine Schnittstelle ist, bedeutet dies, dass alle Unterseiten, die die Eigenschaften und Methoden dieser Schnittstelle beschreiben, ebenfalls entfernt werden.
- Entfernen Sie das Element aus allen Listen von Eigenschaften, Attributen, Methoden usw. Für Methoden einer Schnittstelle bedeutet dies z.B., es aus dem Abschnitt "Methoden" auf der Übersichtsseite der Schnittstelle zu entfernen.
- Durchsuchen Sie den Text der Übersichtsseite dieser Schnittstelle, dieses Elements etc. nach Referenzen auf das entfernte Element. Entfernen Sie diese Referenzen, achten Sie darauf, keine seltsamen grammatischen Probleme oder andere Probleme mit dem Text zu hinterlassen. Dies kann bedeuten, nicht nur Wörter zu löschen, sondern auch einen Satz oder Absatz umformulieren zu müssen, um mehr Sinn zu machen. Es kann auch bedeuten, gesamte Abschnitte des Inhalts zu entfernen, wenn die Beschreibung der Verwendung des Elements lang ist.
- Suchen Sie ähnlich nach Diskussionen über das Element in den Leitfäden und Tutorials über die relevante API oder Technologie. Entfernen Sie diese Referenzen, achten Sie darauf, keine seltsamen grammatischen Probleme oder andere Probleme mit dem Text zu hinterlassen. Dies kann bedeuten, nicht nur Wörter zu löschen, sondern auch einen Satz oder Absatz umformulieren zu müssen, um mehr Sinn zu machen. Es kann auch bedeuten, gesamte Abschnitte des Inhalts zu entfernen, wenn die Beschreibung der Verwendung des Elements lang ist.
- Durchsuchen Sie die MDN Web Docs nach Referenzen auf das entfernte Element, falls es anderswo Diskussionen gibt. Es ist unwahrscheinlich, dass es welche gibt, da, wenn es nie implementiert wurde, es unwahrscheinlich ist, dass es weit diskutiert wird. Entfernen Sie auch diese Erwähnungen.
- Wenn die JSON-Dateien im [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data) Daten für die entfernten Elemente enthalten, löschen Sie diese Objekte aus dem JSON-Code und reichen Sie eine Pull-Anfrage mit dieser Änderung ein, in der Sie den Grund in der Commit-Nachricht und der Beschreibung der Pull-Anfrage erklären. Achten Sie darauf, dass Sie beim Ausführen dieser Aufgabe nicht die JSON-Syntax brechen.

### Wenn das Element in einem Browser hinter einem Flag implementiert wurde

Wenn das Element in irgendeiner freigegebenen Version von einem oder mehreren Browsern implementiert wurde, aber _nur_ hinter einer Einstellung oder einem Flag, löschen Sie das Element nicht sofort aus der Dokumentation. Markieren Sie stattdessen das Element als **veraltet** wie folgt:

- Aktualisieren Sie die Statusdaten des Elements im Browser-Kompatibilitätsdaten-Repository, indem Sie eine [Pull-Anfrage einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Durchsuchen Sie den informativen Text der Übersichtsseite für diese Schnittstelle, dieses Element etc., nach Referenzen auf das entfernte Element. Fügen Sie an geeigneten Stellen Warnboxen mit einem Text wie "\[Element] wurde aus der Spezifikation entfernt und wird bald aus den Browsern entfernt. Siehe \[Link zur Seite] für eine neue Möglichkeit, dies zu tun."
- Suchen Sie ähnlich nach Diskussionen über das Element in den Leitfäden und Tutorials über die relevante API oder Technologie. Fügen Sie ähnliche Warnungen hinzu.
- Durchsuchen Sie die MDN Web Docs nach Referenzen auf das entfernte Element, falls es anderswo Diskussionen gibt. Fügen Sie dort ebenfalls ähnliche Warnboxen hinzu.
- Irgendwann in der Zukunft könnte die Entscheidung getroffen werden, das Element tatsächlich aus der Dokumentation zu entfernen; in der Regel tun wir dies nicht, aber wenn das Element besonders ungenutzt oder uninteressant war, könnten wir entscheiden, dies zu tun.
- Aktualisieren Sie alle relevanten Einträge im [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data), um die Obsoleszenz der betroffenen Elemente widerzuspiegeln.

### Wenn das Element in einem Browser ohne Flag implementiert wurde

Wenn das Element in eine oder mehrere freigegebene Versionen von Browsern implementiert wurde, ohne dass eine Einstellung oder ein Flag benötigt wird, markieren Sie das Element als **veraltet**, wie folgt:

- Aktualisieren Sie die Statusdaten des Elements im Browser-Kompatibilitätsdaten-Repository, indem Sie eine [Pull-Anfrage einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Durchsuchen Sie den informativen Text der Übersichtsseite für diese Schnittstelle, dieses Element etc., nach Referenzen auf das entfernte Element. Fügen Sie an geeigneten Stellen Warnboxen mit einem Text wie "\[Element] wurde aus der Spezifikation entfernt und ist veraltet. Es könnte in Zukunft aus den Browsern entfernt werden, daher sollten Sie es nicht verwenden. Siehe \[Link zur Seite] für eine neue Möglichkeit, dies zu tun."
- Suchen Sie ähnlich nach Diskussionen über das Element in den Leitfäden und Tutorials über die relevante API oder Technologie. Fügen Sie ähnliche Warnungen hinzu.
- Durchsuchen Sie die MDN Web Docs nach Referenzen auf das entfernte Element, falls es anderswo Diskussionen gibt. Fügen Sie dort ebenfalls ähnliche Warnboxen hinzu.
- Es ist unwahrscheinlich, dass diese Elemente in absehbarer Zeit, wenn überhaupt, aus der Dokumentation entfernt werden.
- Aktualisieren Sie alle relevanten Einträge im [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data), um die Veralterung der betroffenen Elemente widerzuspiegeln.

Bitte verwenden Sie gesunden Menschenverstand bei der Formulierung von Warnmeldungen und anderen Änderungen der Texte, die in den obigen Richtlinien vorgeschlagen wurden.
Unterschiedliche Elemente erfordern unterschiedliche Formulierungen und eine unterschiedliche Handhabung der Situation.
Wenn Sie im Zweifel sind, zögern Sie nicht, um Rat in den [MDN Web Docs Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) zu fragen.

## Richtlinien zur Dokumentation eines Spezifikationenkonflikts

Manchmal, aber selten, kann es einen Konflikt zwischen verschiedenen Versionen einer Spezifikation geben (normalerweise W3C versus WHATWG). Zum Beispiel könnte eine Version ein Feature als veraltet auflisten, während die andere dies nicht tut.
In solchen Fällen sollten Sie überlegen, was die Realität ist, d.h. berücksichtigen, was Browser tatsächlich tun, und eine "wichtige" Anmerkung schreiben, um den neuesten Stand zusammenzufassen.
Ein Beispiel: Im Januar 2019 hatte das globale Attribut [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) einen Konflikt, der wie folgt zusammengefasst wurde:

> [!WARNING]
> Spezifikationskonflikt: Die WHATWG-Spezifikation listet [`inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode) und moderne Browser arbeiten an seiner Unterstützung.
> Die [W3C HTML 5.2 Spezifikation](https://html.spec.whatwg.org/multipage/index.html#contents) listet es jedoch nicht mehr auf (d.h. markiert es als obsolet).
> Sie sollten die Definition der WHATWG-Spezifikation als korrekt betrachten, bis ein Konsens erreicht wird.

## Siehe auch

- [Feature-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
