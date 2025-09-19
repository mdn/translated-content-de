---
title: Experimentell, veraltet und obsolet
slug: MDN/Writing_guidelines/Experimental_deprecated_obsolete
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

Diese Begriffe sind häufig mit Technologien und Spezifikationen verbunden und werden in den MDN Web Docs verwendet, um den Status einer Technologie zu kennzeichnen. Für die Definition dieser Begriffe richtet sich MDN Web Docs nach dem [Browser-Kompatibilitätsdaten-Repository (BCD)](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information). Diese Begriffe werden unten im Kontext ihrer Verwendung in den MDN Web Docs beschrieben.

## Experimentell

Wenn eine Technologie in den MDN Web Docs als experimentell beschrieben wird, bedeutet das, dass die Technologie neu und unreif ist und sich derzeit _in der Entwicklung_ befindet, um in die Web-Plattform aufgenommen zu werden (oder für die Aufnahme in Betracht gezogen wird).
Das Kennzeichnen einer Technologie als experimentell bedeutet, dass Leser sorgfältig überlegen sollten, bevor sie diese Technologie in irgendeinem Produktionsprojekt einsetzen (d.h. ein Projekt, das nicht nur ein Demo oder Experiment ist). Leser werden [ermutigt, experimentelle Funktionen auszuprobieren](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) und Rückmeldungen an Browser-Anbieter und Standards-Autoren zu geben.

Für eine als **experimentell** gekennzeichnete Technologie gilt eine oder mehrere der folgenden Bedingungen:

- Sie wird in der Release-Version **nur einer** modernen Hauptbrowser-Rendering-Engine standardmäßig implementiert und aktiviert.
- Sie wird nur durch Konfigurationsänderungen wie Einstellungen oder Flags unterstützt, unabhängig von der Anzahl der unterstützten Rendering-Engines.
- Ihre definierende Spezifikation wird voraussichtlich in abwärtsinkompatibler Weise erheblich geändert (d.h. es kann bestehenden Code brechen, der sich auf das Merkmal verlässt).

> [!NOTE]
> Ein Merkmal, das nur in einer Rendering-Engine veröffentlicht wird, gilt immer noch als experimentell, selbst wenn es in Vorschauversionen anderer Rendering-Engines verfügbar ist (oder durch das Setzen einer Einstellung oder eines Flags).

Der **experimentelle** Status einer Technologie kann verfallen, wenn eine oder mehrere der folgenden Bedingungen erfüllt sind:

- Sie wird standardmäßig in **zwei oder mehr** Hauptbrowser-Rendering-Engines unterstützt.
- Sie wird standardmäßig von einer einzelnen Browser-Rendering-Engine für zwei oder mehr Jahre unterstützt und unterliegt keinen wesentlichen Änderungen.
- Ihre definierende Spezifikation wird voraussichtlich nicht in einer Weise geändert, die die Kompatibilität bricht.

Beispiele für diese Bedingungen finden Sie in der [experimentellen Flaggen-Dokumentation](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-experimental) des BCD.

Normalerweise wird die Spezifikation stabil sein, wenn eine Technologie in mehreren wichtigen Browsern unterstützt wird, aber das ist nicht immer der Fall.
Andererseits könnten einige Technologien eine stabile Spezifikation haben, aber keine native Unterstützung in Browsern. [IMSC](/de/docs/Related/IMSC) zum Beispiel wird über ein JavaScript-Polyfill verwendet. <!-- Link muss erneut überprüft werden -->

Ein Merkmal oder eine Technologie, die Teil eines aktiven Spezifikations- oder Standardisierungsprozesses ist und nicht als **veraltet** gekennzeichnet ist, gilt als Teil eines **Standards-Trail**.

## Veraltet

Der Begriff **veraltet** wird in den MDN Web Docs verwendet, um eine API oder Technologie zu kennzeichnen, die nicht mehr empfohlen wird. Eine veraltete API oder Technologie könnte in Zukunft entfernt werden oder könnte nur aus Kompatibilitätsgründen beibehalten werden und möglicherweise noch funktionieren. Wir empfehlen, die als veraltet gekennzeichnete Funktionalität zu vermeiden.

Für weitere Informationen zur Definition von **veraltet** siehe die [veralteten Flaggen-Dokumentation](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-deprecated) des BCD.

## Obsolet

In den MDN Web Docs wurde der Begriff **obsolet** historisch verwendet, um eine API oder Technologie zu kennzeichnen, die nicht nur nicht mehr empfohlen wird, sondern auch nicht mehr in Browsern implementiert ist.
Da der Unterschied zwischen **obsolet** und **veraltet** nicht sehr hilfreich ist, wird der Begriff **obsolet** in den MDN Web Docs nicht mehr verwendet.

> [!NOTE]
> Falls Sie auf irgendeine Instanz von **obsolet** stoßen, sollte diese entfernt oder durch den Begriff **veraltet** ersetzt werden.

## Richtlinien zum Entfernen von Inhalten

Manchmal, während der Entwicklung einer neuen Spezifikation oder im Lauf der Evolution von lebenden Standards wie HTML, werden neue Elemente, Methoden, Eigenschaften usw. in die Spezifikation aufgenommen, dort eine Weile behalten und dann entfernt. Manchmal geschieht dies sehr schnell, und manchmal bleiben diese neuen Elemente monatelang oder sogar jahrelang in der Spezifikation, bevor sie entfernt werden. Dies kann es schwierig machen, zu entscheiden, wie mit der Entfernung des Elements aus der Spezifikation umzugehen ist.

Hier sind einige Richtlinien, die Ihnen dabei helfen, zu entscheiden, was zu tun ist, wenn etwas aus der Spezifikation entfernt wird.

> [!NOTE]
> Für die Zwecke dieser Diskussion wird das Wort "Element" verwendet, um alles zu bedeuten, was Teil einer Spezifikation sein kann: ein Element oder ein Attribut eines Elements, eine Schnittstelle oder jede einzelne Methode, eine Eigenschaft oder ein anderes Mitglied einer Schnittstelle usw.

### Wenn das Element nie implementiert wurde

Wenn das Element in einer Release-Version von _keinem_ Browser implementiert wurde, nicht einmal hinter einer Einstellung oder einem Flag, löschen Sie alle Hinweise auf das Element aus der Dokumentation.

- Wenn das Element Dokumentationsseiten hat, die nur dieses eine Element beschreiben (wie [`RTCPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close)), löschen Sie diese Seite.
  Wenn das entfernte Element eine Schnittstelle ist, bedeutet dies, dass Sie auch alle Unterseiten, die die Eigenschaften und Methoden dieser Schnittstelle beschreiben, entfernen müssen.
- Entfernen Sie das Element aus allen Listen von Eigenschaften, Attributen, Methoden usw. Im Fall von Methoden einer Schnittstelle bedeutet dies, dass Sie es aus dem Abschnitt "Methoden" auf der Übersichtsseite der Schnittstelle entfernen.
- Durchsuchen Sie den Text der Übersichtsseite für diese Schnittstelle, das Element usw. nach Verweisen auf das entfernte Element. Entfernen Sie diese Verweise, achten Sie darauf, keine seltsamen Grammatikprobleme oder andere Probleme mit dem Text zu hinterlassen. Dies kann bedeuten, dass nicht nur Wörter gelöscht werden, sondern ein Satz oder Absatz umgeschrieben wird, um verständlicher zu sein. Es kann auch bedeuten, ganze Abschnitte des Inhalts zu entfernen, wenn die Beschreibung der Verwendung des Elements langwierig ist.
- Ebenso suchen Sie nach jeder Diskussion über das Element in den Leitfäden und Anleitungen über die relevante API oder Technologie. Entfernen Sie diese Verweise, achten Sie darauf, keine seltsamen Grammatikprobleme oder andere Probleme mit dem Text zu hinterlassen. Dies kann bedeuten, dass nicht nur Wörter gelöscht werden, sondern ein Satz oder Absatz umgeschrieben wird, um verständlicher zu sein. Es kann auch bedeuten, ganze Abschnitte des Inhalts zu entfernen, wenn die Beschreibung der Verwendung des Elements langwierig ist.
- Suchen Sie in den MDN Web Docs nach Verweisen auf das entfernte Element, falls es anderswo Diskussionen gibt. Es ist unwahrscheinlich, dass es welche gibt, da es, wenn es nie implementiert wurde, wahrscheinlich nicht weit verbreitet diskutiert wird. Entfernen Sie diese Hinweise ebenfalls.
- Wenn die JSON-Dateien im [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data) Daten für die entfernten Elemente enthalten, löschen Sie diese Objekte aus dem JSON-Code und senden Sie eine Pull-Anfrage mit dieser Änderung, indem Sie den Grund in der Commit-Nachricht und der Beschreibung der Pull-Anfrage erläutern. Achten Sie darauf, dass Sie beim Entfernen die JSON-Syntax nicht verletzen.

### Wenn das Element in einem Browser hinter einem Flag implementiert wurde

Wenn das Element in irgendeiner Release-Version eines oder mehrerer Browser implementiert wurde, aber _nur_ hinter einer Einstellung oder einem Flag, löschen Sie das Element nicht sofort aus der Dokumentation. Markieren Sie stattdessen das Element als **veraltet**, wie folgt:

- Aktualisieren Sie die Statusdaten des Elements im Browser-Kompatibilitätsdaten-Repository, indem Sie [eine Pull-Anfrage einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Durchsuchen Sie den Informationstext der Übersichtsseite für diese Schnittstelle, das Element usw. nach Verweisen auf das entfernte Element. Fügen Sie an geeigneten Stellen Warnfelder mit Texten wie "\[Element] wurde aus der Spezifikation entfernt und wird bald aus den Browsern entfernt. Siehe \[Link zur Seite] für einen neuen Weg, dies zu tun."
- Ebenso suchen Sie nach jeder Diskussion über das Element in den Leitfäden und Anleitungen über die relevante API oder Technologie. Fügen Sie ähnliche Warnungen hinzu.
- Suchen Sie in den MDN Web Docs nach Verweisen auf das entfernte Element, falls es anderswo Diskussionen gibt. Fügen Sie dort ebenfalls ähnliche Warnfelder hinzu.
- Irgendwann in der Zukunft kann entschieden werden, das Element tatsächlich aus der Dokumentation zu entfernen; normalerweise tun wir dies nicht, aber wenn das Element besonders ungenutzt oder uninteressant war, könnten wir entscheiden, dies zu tun.
- Aktualisieren Sie alle relevanten Einträge im [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data) um die Veraltung der betroffenen Elemente zu widerspiegeln.

### Wenn das Element in einem Browser ohne Flag implementiert wurde

Wenn das Element in einer oder mehreren Release-Versionen von Browsern ohne eine Einstellung oder ein Flag implementiert wurde, markieren Sie das Element als **veraltet**, wie folgt:

- Aktualisieren Sie die Statusdaten des Elements im Browser-Kompatibilitätsdaten-Repository, indem Sie [eine Pull-Anfrage einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Durchsuchen Sie den Informationstext der Übersichtsseite für diese Schnittstelle, das Element usw. nach Verweisen auf das entfernte Element. Fügen Sie an geeigneten Stellen Warnfelder mit Texten wie "\[Element] wurde aus der Spezifikation entfernt und ist veraltet. Es könnte in Zukunft aus den Browsern entfernt werden, daher sollten Sie es nicht verwenden. Siehe \[Link zur Seite] für einen neuen Weg, dies zu tun."
- Ebenso suchen Sie nach jeder Diskussion über das Element in den Leitfäden und Anleitungen über die relevante API oder Technologie. Fügen Sie ähnliche Warnungen hinzu.
- Suchen Sie in den MDN Web Docs nach Verweisen auf das entfernte Element, falls es anderswo Diskussionen gibt. Fügen Sie dort ebenfalls ähnliche Warnfelder hinzu.
- Es ist unwahrscheinlich, dass diese Elemente in absehbarer Zeit, wenn überhaupt, aus der Dokumentation entfernt werden.
- Aktualisieren Sie alle relevanten Einträge im [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data) um die Veraltung der betroffenen Elemente zu widerspiegeln.

Bitte verwenden Sie gesunden Menschenverstand bei der Formulierung von Warnhinweisen und anderen Änderungen des Textes, die in den obigen Richtlinien vorgeschlagen werden.
Verschiedene Elemente erfordern unterschiedliche Formulierungen und Handhabung der Situation.
Wenn Sie Zweifel haben, zögern Sie nicht, im [MDN Web Docs-Chatrooms](/de/docs/MDN/Community/Communication_channels#chat_rooms) um Rat zu fragen.

## Richtlinien zur Dokumentation eines Spezifikationskonflikts

Manchmal, aber selten, kann es zu einem Konflikt zwischen verschiedenen Spezifikationsversionen (normalerweise W3C gegen WHATWG) kommen. Beispielsweise könnte eine Version ein Merkmal als veraltet auflisten, während die andere es nicht tut.
In solchen Fällen sollte man die Realität berücksichtigen, das heißt, was die Browser tatsächlich tun, und eine "wichtige" Notiz schreiben, um den neuesten Status zusammenzufassen.
Zum Beispiel hat das globale Attribut [`inputmode`](/de/docs/Web/HTML/Reference/Global_attributes/inputmode) seit Januar 2019 einen Konflikt, der folgendermaßen zusammengefasst wurde: <!--dieses Warnbeispiel für einen Spezifikationskonflikt existiert auf dieser Seite nicht mehr. Leider keine anderen Beispiele gefunden. -->

> [!WARNING]
> Spezifikationskonflikt: Die WHATWG-Spezifikation listet [`inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode) auf, und moderne Browser arbeiten darauf hin, es zu unterstützen.
> Die [W3C HTML 5.2-Spec](https://html.spec.whatwg.org/multipage/index.html#contents) führt es jedoch nicht mehr auf (d.h. markiert es als obsolet).
> Sie sollten die Definition der WHATWG als korrekt betrachten, bis ein Konsens erreicht wird.

## Siehe auch

- [Funktionsstatus-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
