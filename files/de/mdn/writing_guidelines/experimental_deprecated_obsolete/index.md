---
title: Experimentell, veraltet und obsolet
slug: MDN/Writing_guidelines/Experimental_deprecated_obsolete
l10n:
  sourceCommit: ce83b64f1132a29a19471e46bfffced755f775eb
---

{{MDNSidebar}}

Diese Begriffe werden häufig in Verbindung mit Technologien und Spezifikationen verwendet und auf MDN Web Docs genutzt, um den Status einer Technologie zu kennzeichnen. Für die Definition dieser Begriffe richten sich die MDN Web Docs nach dem [Browser-Kompatibilitätsdaten (BCD)](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)-Repository.
Diese Begriffe werden im Folgenden im Kontext ihrer Verwendung auf den MDN Web Docs beschrieben.

## Experimentell

Wenn eine Technologie in den MDN Web Docs als experimentell beschrieben wird, bedeutet dies, dass die Technologie neu und unreif ist und derzeit _im Prozess_ ist, zur Web-Plattform hinzugefügt zu werden (oder die Aufnahme in Erwägung gezogen wird).
Eine Technologie als experimentell zu kennzeichnen, bedeutet, dass Leser sorgfältig überlegen sollten, bevor sie diese Technologie in irgendeinem Produktionsprojekt verwenden (d. h. ein Projekt, das nicht nur ein Demo oder Experiment ist). Leser werden [ermutigt, experimentelle Funktionen auszuprobieren](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) und Feedback an Browser-Hersteller und Standardautoren zu geben.

Für eine als **experimentell** gekennzeichnete Technologie gelten eine oder mehrere der folgenden Bedingungen:

- Es wird in der Release-Version des **nur einen** modernen großen Browser-Rendering-Engines implementiert und standardmäßig aktiviert.
- Es wird nur durch Konfigurationsänderungen wie Einstellungen oder Flags unterstützt, unabhängig von der Anzahl der unterstützten Rendering-Engines.
- Die definierende Spezifikation wird wahrscheinlich signifikant in rückwärtsinkompatibler Weise geändert (d. h., es kann bestehenden Code brechen, der auf die Funktion angewiesen ist).

> [!NOTE]
> Eine Funktion, die nur auf einer Rendering-Engine veröffentlicht wird, gilt auch als experimentell, wenn sie in Vorabversionen anderer Rendering-Engines verfügbar ist (oder durch Setzen einer Einstellung oder eines Flags).

Der **experimentelle** Status einer Technologie kann ablaufen, wenn eine oder mehrere der folgenden Bedingungen erfüllt sind:

- Es wird standardmäßig in **zwei oder mehr** großen Browser-Rendering-Engines unterstützt.
- Es wird für zwei oder mehr Jahre standardmäßig von einer einzigen Browser-Rendering-Engine unterstützt und erfährt keine wesentlichen Änderungen.
- Es ist unwahrscheinlich, dass die definierende Spezifikation sich in einer Weise ändert, die die Kompatibilität beeinträchtigen würde.

Beispiele für diese Bedingungen finden Sie in der [Experimental-Flag](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental)-BCD-Dokumentation.

In der Regel ist die Spezifikation stabil, wenn eine Technologie in mehreren großen Browsern unterstützt wird, aber das ist nicht immer der Fall.
Andererseits können einige Technologien eine stabile Spezifikation haben, aber keine native Unterstützung in Browsern. Zum Beispiel wird [IMSC](/de/docs/Related/IMSC) über ein JavaScript-Polyfill verwendet. <!-- Link muss überprüft werden -->

Eine Funktion oder Technologie, die Teil eines aktiven Spezifikations- oder Standardisierungsprozesses ist und nicht als **veraltet** markiert ist, wird als **Standards-Track** bezeichnet.

## Veraltet

Der Begriff **veraltet** wird auf den MDN Web Docs verwendet, um eine API oder Technologie zu kennzeichnen, die nicht mehr empfohlen wird. Eine veraltete API oder Technologie könnte in Zukunft entfernt werden oder nur aus Kompatibilitätsgründen bleiben und könnte weiterhin funktionieren. Wir empfehlen, die als veraltet gekennzeichnete Funktionalität zu vermeiden.

Weitere Informationen zur Definition von **veraltet** finden Sie in der [Veraltet-Flag](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated)-BCD-Dokumentation.

## Obsolet

Der Begriff **obsolet** wurde historisch auf den MDN Web Docs verwendet, um eine API oder Technologie anzuzeigen, die nicht nur nicht mehr empfohlen wird, sondern auch nicht mehr in Browsern implementiert ist.
Da der Unterschied zwischen **obsolet** und **veraltet** nicht sehr hilfreich ist, verwenden wir den Begriff **obsolet** auf den MDN Web Docs nicht mehr.

> [!NOTE]
> Wenn Sie auf eine Instanz von **obsolet** stoßen, sollte diese entfernt oder durch den Begriff **veraltet** ersetzt werden.

## Richtlinien zum Entfernen von Inhalten

Manchmal werden während der Entwicklung einer neuen Spezifikation oder im Laufe der Evolution von lebenden Standards wie HTML neue Elemente, Methoden, Eigenschaften usw. in die Spezifikation aufgenommen, dort für eine Weile behalten und dann entfernt. Manchmal geschieht dies sehr schnell und manchmal bleiben diese neuen Elemente für Monate oder sogar Jahre in der Spezifikation, bevor sie entfernt werden. Dies kann die Entscheidung erschweren, wie mit dem Entfernen des Elements aus der Spezifikation umgegangen werden soll.

Hier sind einige Richtlinien, die Ihnen helfen sollen zu entscheiden, was zu tun ist, wenn etwas aus der Spezifikation entfernt wird.

> [!NOTE]
> Für die Zwecke dieser Diskussion wird das Wort "Element" verwendet, um alles zu bedeuten, was Teil einer Spezifikation sein kann: ein Element oder ein Attribut eines Elements, eine Schnittstelle oder eine einzelne Methode, eine Eigenschaft oder ein anderes Mitglied einer Schnittstelle usw.

### Wenn das Element nie implementiert wurde

Wenn das Element _nie_ in einer Release-Version eines _beliebigen_ Browsers implementiert wurde, nicht einmal hinter einer Präferenz oder einem Flag, löschen Sie alle Verweise auf das Element aus der Dokumentation.

- Wenn das Element über Dokumentationsseiten verfügt, die nur dieses eine Element beschreiben (wie z. B. [`RTCPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close)), löschen Sie diese Seite.
  Wenn das entfernte Element eine Schnittstelle ist, bedeutet dies, dass alle Unterseiten entfernt werden müssen, die die Eigenschaften und Methoden dieser Schnittstelle beschreiben.
- Entfernen Sie das Element aus allen Listen von Eigenschaften, Attributen, Methoden usw. Für Methoden einer Schnittstelle bedeutet dies beispielsweise, dass es aus dem Abschnitt "Methoden" auf der Übersichtsseite der Schnittstelle entfernt werden muss.
- Durchsuchen Sie den Text der Übersichtsseite für diese Schnittstelle, dieses Element usw. nach Verweisen auf das entfernte Element. Entfernen Sie diese Verweise, achten Sie darauf, nicht seltsame Grammatikprobleme oder andere Probleme mit dem Text zu hinterlassen. Dies kann bedeuten, nicht nur Wörter zu löschen, sondern einen Satz oder Absatz umzuschreiben, um mehr Sinn zu ergeben. Es kann auch bedeuten, ganze Abschnitte von Inhalten zu entfernen, wenn die Beschreibung der Verwendung des Elements lang ist.
- Suchen Sie ähnlich nach Diskussionen über das Element in den Leitfäden und Tutorials über die betreffende API oder Technologie. Entfernen Sie diese Verweise, achten Sie darauf, keine seltsamen grammatikalischen Probleme oder andere Probleme mit dem Text zu hinterlassen. Dies kann bedeuten, nicht nur Wörter zu löschen, sondern einen Satz oder Absatz umzuschreiben, um mehr Sinn zu ergeben. Es kann auch bedeuten, ganze Abschnitte von Inhalten zu entfernen, wenn die Beschreibung der Verwendung des Elements lang ist.
- Suchen Sie in den MDN Web Docs nach Verweisen auf das entfernte Element, falls es Diskussionen anderswo gibt. Es ist unwahrscheinlich, dass es welche gibt, da es unwahrscheinlich ist, dass es weit diskutiert wird, wenn es nie implementiert wurde. Entfernen Sie auch diese Erwähnungen.
- Wenn die JSON-Dateien im [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data) Daten zu den entfernten Elementen enthalten, löschen Sie diese Objekte aus dem JSON-Code und reichen Sie einen Pull-Request mit dieser Änderung ein und erläutern Sie den Grund im Commit-Kommentar und in der Pull-Request-Beschreibung. Achten Sie darauf, dass Sie die JSON-Syntax dabei nicht zerstören.

### Wenn das Element in einem Browser hinter einem Flag implementiert wurde

Wenn das Element in einer Release-Version eines oder mehrerer Browser implementiert wurde, aber _nur_ hinter einer Präferenz oder einem Flag, löschen Sie das Element nicht sofort aus der Dokumentation. Markieren Sie das Element stattdessen als **veraltet** wie folgt:

- Aktualisieren Sie die Statusdaten des Elements im Browser-compat-data-Repository, indem Sie [einen Pull-Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Durchsuchen Sie den informativen Text der Übersichtsseite für die betreffende Schnittstelle, das Element usw. nach Verweisen auf das entfernte Element. Fügen Sie an geeigneten Stellen Warnboxen mit Texten wie "\[Element] wurde aus der Spezifikation entfernt und wird bald aus den Browsern entfernt. Siehe \[Link zur Seite] für eine neue Möglichkeit, dies zu tun."
- Suchen Sie ähnlich nach Diskussionen über das Element in den Leitfäden und Tutorials über die betreffende API oder Technologie. Fügen Sie ähnliche Warnungen hinzu.
- Suchen Sie in den MDN Web Docs nach Verweisen auf das entfernte Element, falls es Diskussionen anderswo gibt. Fügen Sie auch dort ähnliche Warnboxen hinzu.
- Irgendwann in der Zukunft kann entschieden werden, das Element tatsächlich aus der Dokumentation zu entfernen; normalerweise tun wir das nicht, aber wenn das Element besonders ungenutzt oder uninteressant war, können wir uns dazu entschließen.
- Aktualisieren Sie alle relevanten Einträge im [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data), um die Veralterung der betroffenen Elemente widerzuspiegeln.

### Wenn das Element in einem Browser ohne Flag implementiert wurde

Wenn das Element in einer oder mehreren Release-Versionen von Browsern implementiert wurde, ohne dass eine Präferenz oder ein Flag erforderlich war, markieren Sie das Element als **veraltet**, wie folgt:

- Aktualisieren Sie die Statusdaten des Elements im Browser-compat-data-Repository, indem Sie [einen Pull-Request einreichen](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Durchsuchen Sie den informativen Text der Übersichtsseite für die betreffende Schnittstelle, das Element usw. nach Verweisen auf das entfernte Element. Fügen Sie an geeigneten Stellen Warnboxen mit Texten wie "\[Element] wurde aus der Spezifikation entfernt und ist veraltet. Es könnte in Zukunft aus den Browsern entfernt werden, daher sollten Sie es nicht verwenden. Siehe \[Link zur Seite] für eine neue Möglichkeit, dies zu tun."
- Suchen Sie ähnlich nach Diskussionen über das Element in den Leitfäden und Tutorials über die betreffende API oder Technologie. Fügen Sie ähnliche Warnungen hinzu.
- Suchen Sie in den MDN Web Docs nach Verweisen auf das entfernte Element, falls es Diskussionen anderswo gibt. Fügen Sie auch dort ähnliche Warnboxen hinzu.
- Es ist unwahrscheinlich, dass diese Elemente in absehbarer Zeit, wenn überhaupt, aus der Dokumentation entfernt werden.
- Aktualisieren Sie alle relevanten Einträge im [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data), um die Veralterung der betroffenen Elemente widerzuspiegeln.

Bitte verwenden Sie Ihr gesunden Menschenverstand bei der Formulierung von Warnmeldungen und anderen Änderungen an den Texten, die in den obigen Richtlinien vorgeschlagen werden.
Unterschiedliche Elemente erfordern unterschiedliche Formulierungen und Umgang mit der Situation.
Wenn Sie unsicher sind, zögern Sie nicht, um Rat in den [MDN Web Docs-Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms) zu bitten.

## Richtlinien zum Dokumentieren eines Spezifikationskonflikts

Manchmal, aber selten, kann es einen Konflikt zwischen verschiedenen Spezifikationsversionen geben (normalerweise W3C gegenüber WHATWG). Beispielsweise könnte eine Version ein Feature als veraltet auflisten, während die andere dies nicht tut.
In solchen Fällen sollten Sie überlegen, was die Realität ist, d. h., was Browser tatsächlich tun, und eine "wichtige" Notiz schreiben, um diesen aktuellen Status zusammenzufassen.
Ein Beispiel: Seit Januar 2019 gab es einen Konflikt beim globalen Attribut [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode), der wie folgt zusammengefasst wurde: <!--dieses Warnbeispiel für Spezifikationskonflikte existiert auf dieser Seite nicht mehr. Konnte auch keine anderen Beispiele finden -->

> [!WARNING]
> Spezifikationskonflikt: Die WHATWG-Spezifikation listet [`inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode) auf und moderne Browser arbeiten daran, es zu unterstützen.
> Die [W3C HTML 5.2 Spezifikation](https://html.spec.whatwg.org/multipage/index.html#contents) hingegen listet es nicht mehr auf (d. h. markiert es als obsolet).
> Sie sollten die WHATWG-Definition als korrekt ansehen, bis ein Konsens erreicht ist.

## Siehe auch

- [Feature-Statuts Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
