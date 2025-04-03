---
title: Experimentell, veraltet und obsolet
slug: MDN/Writing_guidelines/Experimental_deprecated_obsolete
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Diese Begriffe sind häufig mit Technologien und Spezifikationen verbunden und werden in den MDN Web Docs verwendet, um den Status einer Technologie zu kennzeichnen. Die Definition dieser Begriffe bei MDN Web Docs entspricht dem [Browser-Kompatibilitätsdaten (BCD)](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) Repository.
Diese Begriffe werden im Folgenden im Kontext ihrer Verwendung in den MDN Web Docs beschrieben.

## Experimentell

Wenn eine Technologie in den MDN Web Docs als experimentell beschrieben wird, bedeutet dies, dass die Technologie neu und unreif ist und sich derzeit _im Prozess_ der Hinzufügung zur Webplattform befindet (oder für die Hinzufügung in Betracht gezogen wird).
Das Kennzeichnen einer Technologie als experimentell weist darauf hin, dass Leser sorgfältig überlegen sollten, bevor sie diese Technologie in einem Produktionsprojekt verwenden (d.h. einem Projekt, das nicht nur ein Demo oder Experiment ist). Leser werden [ermutigt, experimentelle Funktionen auszuprobieren](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information) und Feedback an Browseranbieter und Normungsautoren zu geben.

Für eine als **experimentell** gekennzeichnete Technologie gelten eine oder mehrere der folgenden Bedingungen:

- Es ist in der freigegebenen Version von **nur einem** modernen, großen Browser-Rendering-Engine implementiert und standardmäßig aktiviert.
- Es wird nur durch Konfigurationsänderungen wie Präferenzen oder Flags unterstützt, unabhängig von der Anzahl der unterstützten Rendering-Engines.
- Die definierende Spezifikation wird wahrscheinlich signifikante, rückwärts-inkompatible Änderungen erfahren (d.h. sie kann vorhandenen Code, der auf der Funktion basiert, brechen).

> [!NOTE]
> Eine Funktion, die nur auf einer Rendering-Engine veröffentlicht wird, gilt immer noch als experimentell, selbst wenn sie in Vorabversionen anderer Rendering-Engines (oder durch Setzen einer Präferenz oder eines Flags) verfügbar ist.

Der **experimentelle** Status einer Technologie kann ablaufen, wenn eine oder mehrere der folgenden Bedingungen erfüllt sind:

- Es wird standardmäßig in **zwei oder mehr** großen Browser-Rendering-Engines unterstützt.
- Es wird standardmäßig von einer einzelnen Browser-Rendering-Engine für zwei oder mehr Jahre unterstützt und erfährt keine wesentlichen Änderungen.
- Es ist unwahrscheinlich, dass sich die definierende Spezifikation in einer Weise ändert, die die Kompatibilität beeinträchtigt.

Beispiele für diese Bedingungen finden Sie in der BCD-Dokumentation zur [experimentellen Kennzeichnung](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-experimental).

In der Regel wird eine Technologie, die in mehreren großen Browsern unterstützt wird, eine stabile Spezifikation haben, aber das ist nicht immer der Fall.
Andererseits könnten einige Technologien eine stabile Spezifikation haben, aber keinen nativen Support in Browsern. [IMSC](/de/docs/Related/IMSC) beispielsweise wird über ein JavaScript-Polyfill verwendet.

Eine Funktion oder Technologie, die Teil eines aktiven Spezifikations- oder Standardisierungsprozesses ist und nicht als **veraltet** gekennzeichnet ist, wird als **Standard-Track** bezeichnet.

## Veraltet

Der Begriff **veraltet** wird in den MDN Web Docs verwendet, um eine API oder Technologie zu kennzeichnen, die nicht mehr empfohlen wird. Eine veraltete API oder Technologie könnte in Zukunft entfernt werden oder nur aus Kompatibilitätsgründen beibehalten werden und kann weiterhin funktionieren. Wir empfehlen, die als veraltet markierte Funktionalität zu vermeiden.

Für weitere Informationen zur Definition von **veraltet** siehe die BCD-Dokumentation zur [veralteten Kennzeichnung](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md#setting-deprecated).

## Obsolet

In den MDN Web Docs wurde der Begriff **obsolet** historisch verwendet, um eine API oder Technologie zu kennzeichnen, die nicht nur nicht mehr empfohlen, sondern auch nicht mehr in Browsern implementiert ist.
Da der Unterschied zwischen **obsolet** und **veraltet** nicht sehr hilfreich ist, verwenden wir den Begriff **obsolet** in den MDN Web Docs nicht mehr.

> [!NOTE]
> Wenn Sie auf eine Instanz von **obsolet** stoßen, sollte sie entfernt oder durch den Begriff **veraltet** ersetzt werden.

## Richtlinien zum Entfernen von Inhalten

Manchmal, während der Entwicklung einer neuen Spezifikation oder im Laufe der Evolution von lebenden Standards wie HTML, werden neue Elemente, Methoden, Eigenschaften usw. in die Spezifikation aufgenommen, dort für eine Weile beibehalten und dann entfernt. Manchmal passiert dies sehr schnell, und manchmal bleiben diese neuen Elemente monatelang oder sogar jahrelang in der Spezifikation, bevor sie entfernt werden. Dies kann es schwierig machen, zu entscheiden, wie mit der Entfernung des Elements aus der Spezifikation umgegangen werden soll.

Hier sind einige Richtlinien, die Ihnen helfen zu entscheiden, was zu tun ist, wenn etwas aus der Spezifikation entfernt wird.

> [!NOTE]
> Für die Zwecke dieser Diskussion wird das Wort "Element" verwendet, um alles zu bedeuten, was Teil einer Spezifikation sein kann: ein Element oder ein Attribut eines Elements, eine Schnittstelle oder eine beliebige individuelle Methode, eine Eigenschaft oder ein anderes Mitglied einer Schnittstelle usw.

### Wenn das Element nie implementiert wurde

Wenn das Element _nie_ in einer freigegebenen Version von _irgendeinem_ Browser implementiert wurde, nicht einmal hinter einer Präferenz oder einem Flag, löschen Sie alle Verweise auf das Element aus der Dokumentation.

- Wenn das Element über Dokumentationsseiten verfügt, die nur dieses eine Element beschreiben (wie z.B. [`RTCPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close)), löschen Sie diese Seite.
  Wenn das entfernte Element eine Schnittstelle ist, bedeutet dies, dass alle Unterseiten, die die Eigenschaften und Methoden dieser Schnittstelle beschreiben, entfernt werden müssen.
- Entfernen Sie das Element aus allen Listen von Eigenschaften, Attributen, Methoden usw. Für Methoden einer Schnittstelle bedeutet dies beispielsweise, dass es aus dem Abschnitt "Methoden" auf der Übersichtsseite der Schnittstelle entfernt wird.
- Suchen Sie im Text der Übersichtsseite dieser Schnittstelle, dieses Elements usw. nach Verweisen auf das entfernte Element. Entfernen Sie diese Verweise, ohne dabei eigenartige grammatikalische Probleme oder andere Probleme im Text zu hinterlassen. Dies kann bedeuten, dass nicht nur Wörter gelöscht werden, sondern auch ein Satz oder Absatz umgeschrieben werden muss, um mehr Sinn zu ergeben. Es kann auch bedeuten, ganze Abschnitte des Inhalts zu entfernen, wenn die Beschreibung der Verwendung des Elements ausführlich ist.
- Ähnlich suchen Sie nach Diskussionen über das Element in den Leitfäden und Tutorials zur betreffenden API oder Technologie. Entfernen Sie diese Verweise, ohne dabei eigenartige grammatikalische Probleme oder andere Probleme im Text zu hinterlassen. Dies kann bedeuten, dass nicht nur Wörter gelöscht werden, sondern auch ein Satz oder Absatz umgeschrieben werden muss, um mehr Sinn zu ergeben. Es kann auch bedeuten, ganze Abschnitte des Inhalts zu entfernen, wenn die Beschreibung der Verwendung des Elements ausführlich ist.
- Suchen Sie in den MDN Web Docs nach Verweisen auf das entfernte Element, falls es anderswo Diskussionen gibt. Es ist unwahrscheinlich, dass es sie gibt, da es, wenn es nie implementiert wurde, wahrscheinlich nicht weit verbreitet diskutiert wird. Entfernen Sie auch diese Erwähnungen.
- Wenn die JSON-Dateien im [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data) Daten für die entfernten Elemente enthalten, löschen Sie diese Objekte aus dem JSON-Code und reichen Sie einen Pull-Request mit dieser Änderung ein, wobei Sie den Grund in der Commit-Nachricht und der Pull-Request-Beschreibung erklären. Achten Sie darauf, dass Sie beim Löschen nicht die JSON-Syntax brechen.

### Wenn das Element in einem Browser hinter einem Flag implementiert wurde

Wenn das Element in einer freigegebenen Version eines oder mehrerer Browser implementiert, aber _nur_ hinter einer Präferenz oder einem Flag verfügbar war, löschen Sie das Element nicht sofort aus der Dokumentation. Stattdessen markieren Sie das Element als **veraltet** wie folgt:

- Aktualisieren Sie den Status des Elements im Browser-Kompatibilitätsdaten-Repository durch [das Einreichen eines Pull-Requests](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Suchen Sie im informativen Text der Übersichtsseite dieser Schnittstelle, dieses Elements usw. nach Verweisen auf das entfernte Element. Fügen Sie an geeigneten Stellen Warnkästen mit Text wie "\[Element] wurde aus der Spezifikation entfernt und wird bald aus den Browsern entfernt. Siehe \[Link zur Seite] für eine neue Möglichkeit, dies zu tun."
- Ähnlich suchen Sie nach Diskussionen über das Element in den Leitfäden und Tutorials zur betreffenden API oder Technologie. Fügen Sie ähnliche Warnhinweise hinzu.
- Durchsuchen Sie die MDN Web Docs nach Verweisen auf das entfernte Element, falls es anderswo Diskussionen gibt. Fügen Sie dort ebenfalls ähnliche Warnkästen hinzu.
- Irgendwann in der Zukunft könnte eine Entscheidung getroffen werden, das Element tatsächlich aus der Dokumentation zu entfernen; das machen wir normalerweise nicht, aber wenn das Element besonders wenig genutzt oder uninteressant war, könnten wir dies beschließen.
- Aktualisieren Sie alle relevanten Einträge im [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data), um die Obsoleszenz der betroffenen Elemente zu reflektieren.

### Wenn das Element in einem Browser ohne Flag implementiert wurde

Wenn das Element in einer oder mehreren freigegebenen Versionen von Browsern implementiert wurde, ohne dass eine Präferenz oder ein Flag erforderlich war, markieren Sie das Element als **veraltet**, wie folgt:

- Aktualisieren Sie den Status des Elements im Browser-Kompatibilitätsdaten-Repository durch [das Einreichen eines Pull-Requests](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data).
- Suchen Sie im informativen Text der Übersichtsseite dieser Schnittstelle, dieses Elements usw. nach Verweisen auf das entfernte Element. Fügen Sie an geeigneten Stellen Warnkästen mit Text wie "\[Element] wurde aus der Spezifikation entfernt und ist veraltet. Es könnte in Zukunft aus den Browsern entfernt werden, daher sollten Sie es nicht verwenden. Siehe \[Link zur Seite] für eine neue Möglichkeit, dies zu tun."
- Ähnlich suchen Sie nach Diskussionen über das Element in den Leitfäden und Tutorials zur betreffenden API oder Technologie. Fügen Sie ähnliche Warnhinweise hinzu.
- Durchsuchen Sie die MDN Web Docs nach Verweisen auf das entfernte Element, falls es anderswo Diskussionen gibt. Fügen Sie dort ebenfalls ähnliche Warnkästen hinzu.
- Es ist unwahrscheinlich, dass diese Elemente in naher Zukunft jemals aus der Dokumentation entfernt werden.
- Aktualisieren Sie alle relevanten Einträge im [Browser-Kompatibilitätsdaten-Repository](https://github.com/mdn/browser-compat-data), um die Veralterung der betroffenen Elemente zu reflektieren.

Bitte verwenden Sie gesunden Menschenverstand bei der Formulierung von Warnhinweisen und anderen Textänderungen, die in den oben genannten Richtlinien vorgeschlagen werden.
Verschiedene Elemente erfordern unterschiedliche Formulierungen und Umgang mit der Situation.
Wenn Sie unsicher sind, zögern Sie nicht, Rat in den [MDN Web Docs-Chat-Räumen](/de/docs/MDN/Community/Communication_channels#chat_rooms) einzuholen.

## Richtlinien zur Dokumentation eines Spezifikationskonflikts

Manchmal, aber selten, kann es zu einem Konflikt zwischen verschiedenen Spezifikationsversionen kommen (normalerweise W3C versus WHATWG). Zum Beispiel könnte eine Version eine Funktion als veraltet auflisten, während die andere dies nicht tut.
In solchen Fällen sollten Sie überlegen, was die Realität ist, das heißt, was Browser tatsächlich tun, und eine "wichtige" Notiz schreiben, um den neuesten Status zusammenzufassen.
Zum Beispiel hatte im Januar 2019 das globale Attribut [`inputmode`](/de/docs/Web/HTML/Global_attributes/inputmode) einen Konflikt, der wie folgt zusammengefasst wurde: <!--diese Warnung für Spezifikationskonflikte existiert nicht mehr auf dieser Seite. Konnte auch keine anderen Beispiele finden -->

> [!WARNING]
> Spezifikationskonflikt: Die WHATWG-Spezifikation listet [`inputmode`](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode) und moderne Browser arbeiten daran, es zu unterstützen.
> Die [W3C HTML 5.2 Spezifikation](https://html.spec.whatwg.org/multipage/index.html#contents) listet es jedoch nicht mehr (d.h. markiert es als obsolet).
> Sie sollten die WHATWG-Definition als korrekt ansehen, bis ein Konsens erreicht ist.

## Siehe auch

- [Feature-Status-Makros](/de/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
