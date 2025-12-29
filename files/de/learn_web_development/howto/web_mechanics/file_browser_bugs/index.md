---
title: Wann und wie Sie Bugs bei Browsern melden
slug: Learn_web_development/Howto/Web_mechanics/File_browser_bugs
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

Browser sind Software und wie jede Software können sie Fehler enthalten. Manchmal stellen Sie möglicherweise fest, dass die von Ihnen entwickelte Website nicht wie erwartet funktioniert oder von der Dokumentation, wie beispielsweise MDN oder den Spezifikationen, beschrieben wird. Dies könnte entweder auf einen Bug in Ihrem Code, einen Bug in der Dokumentation (hoffen wir, dass nicht!) oder einen Bug im Browser hinweisen, den Sie zum Testen Ihrer Website verwenden. In diesem Artikel werden wir besprechen, wie Sie herausfinden, was das Problem ist, und wie Sie einen Bug melden, wenn sich herausstellt, dass es ein Problem im Browser ist.

## Wessen Bug ist es?

Bevor Sie einen Browser-Bug melden, sollten Sie bestätigen, dass es sich tatsächlich um ein Problem im Browser handelt. Das Problem könnte aus einem der vier Bereiche stammen: Ihrem Code, der Dokumentation, dem Browser oder der Spezifikation. Es ist wichtig, andere Möglichkeiten auszuschließen, bevor Sie einen Bug beim Browser melden. Generell sind Spezifikationen die verlässlichste Quelle von allen; Browser und Dokumentation folgen den Spezifikationen, können aber dennoch Fehler enthalten. Was Ihren Code betrifft... nun, es ist immer gut, auf Tippfehler und Logikfehler zu überprüfen, bevor man annimmt, dass es ein Browser-Bug ist.

### Erstellen eines Testfalls

Der erste Schritt zur Identifikation der Fehlerquelle ist das Erstellen eines minimalen Testfalls, der den Bug reproduziert. Er sollte klein und eigenständig sein, vorzugsweise eine einzige HTML-Datei mit eingebettetem CSS und JavaScript, ohne externe Abhängigkeiten oder nicht zusammenhängenden Code. Dies ist aus zwei Gründen nützlich:

- Es minimiert die Möglichkeit, dass das Problem durch Ihren eigenen Code oder eine externe Abhängigkeit verursacht wird.
- Sie müssen sowieso einen bereitstellen, wenn Sie es mit jemandem besprechen möchten - zum Beispiel, wenn Sie einen Bug melden.

Zum Beispiel wäre das Folgende ein guter Testfall für einen Bug, der mit der {{cssxref(":autofill")}} Pseudo-Klasse zusammenhängt. Beachten Sie, wie wir es auf das absolut Notwendige reduziert haben, was bedeutet, dass wir auf bewährte Praktiken wie das Einbinden des Doctypes, `<head>`- und `<body>`-Tags oder Labels für Eingaben verzichten. Das ist in Ordnung, weil der relevante Code immer noch vorhanden ist.

```html
<style>
  :autofill {
    border: 3px solid darkorange;
  }
</style>
<input id="name" name="name" type="text" autocomplete="name" />
<input id="email" name="email" type="email" autocomplete="email" />
```

### Testen Ihres Codes

Sie können Ihren HTML-Code lokal speichern und [über einen Testserver bereitstellen](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) oder einen Online-Dienst wie [JSFiddle](https://jsfiddle.net/) oder [CodePen](https://codepen.io/) verwenden, um eine Live-Demo zu erstellen.

Der einfachste Weg, um zu testen, ob das Problem ein Browser-Bug ist, besteht darin, Ihren Testfall in [mehreren Browsern](/de/docs/Learn_web_development/Extensions/Testing/Introduction) zu öffnen. Wenn Sie in verschiedenen Browsern abweichendes Verhalten feststellen, ist es wahrscheinlicher, dass es sich um einen Browser-Bug handelt.

> [!NOTE]
> Es gibt weitere Schritte, die Sie unternehmen können, um das Problem einzugrenzen, wie das Testen in einem privaten Fenster, das Deaktivieren von Erweiterungen oder das Leeren des Caches. Sie sollten diese ebenfalls ausprobieren, bevor Sie den Bug melden.

### Überprüfung des Implementierungsstatus

Beginnen Sie damit, der Dokumentation zu vertrauen und untersuchen Sie den/die Browser, dessen/deren Verhalten nicht mit dieser übereinstimmt. Nicht alle unerwarteten Verhaltensweisen sind Bugs. Manchmal implementieren Browser ein Feature oder Verhalten, das noch nicht in die Spezifikation aufgenommen wurde, was folglich weniger wahrscheinlich dokumentiert ist. Eine andere Möglichkeit ist, dass ein Merkmal in der Spezifikation beschrieben ist, aber noch in keinem Browser implementiert wurde, was ebenfalls bedeutet, dass es möglicherweise nicht dokumentiert ist.

An diesem Punkt sollten Sie weitere Quellen überprüfen, um die Implementierungsgeschichte zu bestimmen. Hier sind einige Orte, an denen Sie nachsehen können:

- **MDN's Browser-Kompatibilitätstabellen**: Im Abschnitt "Browser-Kompatibilität" auf unseren Referenzseiten (zum Beispiel in [diesem Abschnitt](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#browser_compatibility) auf der Seite zur `shape()` CSS-Funktion) finden Sie Informationen darüber, welche Browser ein Feature unterstützen und in welchem Umfang. Dies kann darauf hinweisen, dass ein Feature in Ihrem Zielbrowser nicht implementiert ist oder dass es nur teilweise implementiert ist (das heißt, es hat bekannte Bugs oder Einschränkungen).
- **Spezifikations-Repositories**: Normungsgremien wie [WHATWG](https://github.com/whatwg) (für DOM, HTML, fetch und mehr), [CSSWG](https://github.com/w3c/csswg-drafts) (für CSS) und [TC39](https://github.com/tc39) (für JavaScript) arbeiten öffentlich auf GitHub. Sie können nachsehen, ob eine Spezifikation kürzlich geändert wurde, oder ob es ein offenes Problem zu dem von Ihnen getesteten Feature gibt.
- **Community-Foren**: Die [MDN-Community](/de/docs/MDN/Community/Communication_channels) ist ein guter Ausgangspunkt, ebenso wie andere Webentwicklungsforen. Diese sind gute Orte, um Fragen darüber zu stellen, ob Browser etwas noch nicht implementiert haben oder ob ein bekannter Bug vorliegt.
- **Issue Tracker für den getesteten Browser**: Wenn Sie feststellen, dass bereits ein Problem zu Ihrem Problem eingereicht wurde, bestätigt das, dass der Bug real ist, und Sie müssen nichts weiter tun. Tatsächlich werden wir als nächstes die Issue-Tracker behandeln.

Natürlich, selbst wenn alle Browser sich gleich verhalten, könnte trotzdem ein Bug in allen vorhanden sein, oder vielleicht implementiert nur ein einzelner Browser das gewünschte Verhalten. Dokumentationen könnten veraltet oder falsch sein. Um sicher zu sein, sollten Sie die Spezifikation als die letztendliche Quelle der Wahrheit betrachten (es sei denn, es handelt sich um die seltenen Fälle, in denen Browser Dinge vor einer Spezifikation implementieren). Auf jeder MDN-Referenzseite finden Sie Links zu den relevanten Spezifikationen im Abschnitt "Spezifikationen" (siehe dieses [Beispiel](/de/docs/Web/CSS/Reference/Values/basic-shape/shape#specifications)). Lesen Sie die Spezifikation, um zu überprüfen, wie das Verhalten sein sollte. Da Spezifikationen für Browser-Ingenieure gedacht sind, können sie manchmal schwer verständlich sein, aber geben Sie Ihr Bestes.

Wenn sich herausstellt, dass alle Browser und die Spezifikation konsistent sind, MDN jedoch falsch ist, ziehen Sie in Betracht, [beizutragen](/de/docs/MDN/Community/Getting_started)!

## Browser-Bug-Tracker

Jeder Browser hat seinen eigenen Bug-Tracker, in dem Sie nach bestehenden Bugs suchen und neue melden können. Die Benutzeroberfläche und der Prozess mögen sich anfangs etwas ungewohnt anfühlen, aber normalerweise gibt es Anleitungen. Die folgende Tabelle listet die Bug-Tracker für die wichtigsten Browser auf:

| Browser         | Bug-Tracker                                           |
| --------------- | ----------------------------------------------------- |
| Apple Safari    | [WebKit Bugzilla](https://webkit.org/reporting-bugs/) |
| Google Chrome   | [Chromium Issues](https://issues.chromium.org/issues) |
| Mozilla Firefox | [Mozilla Bugzilla](https://bugzilla.mozilla.org/)     |
| Opera           | [Opera Bug Wizard](https://bugs.opera.com/wizard/)    |

Suchen Sie nach bestehenden Bug-Berichten, bevor Sie einen neuen einreichen. Wenn Sie einen bestehenden Bug-Bericht finden, der Ihrem Problem entspricht, können Sie mit Ihren Erkenntnissen kommentieren (zum Beispiel, wenn Sie eine Lösung gefunden haben oder mehr Informationen über den Bug haben). Kommentare wie "Ich habe diesen Bug auch gefunden" sollten jedoch vermieden werden, da sie keinen wirklichen Mehrwert bieten. Wenn Sie keinen bestehenden Bug finden können, können Sie einen neuen einreichen – jemand wird Ihnen mitteilen, wenn es ein Duplikat ist.

Wenn Sie einen neuen Bug einreichen, stellen Sie sicher, dass Sie Ihren minimalen Testfall und alle anderen Informationen beifügen, die im Meldeformular gefragt werden – wie die Browserversion, erwartete vs. tatsächliche Ergebnisse und Screenshots. Einige Bug-Tracker verlangen möglicherweise auch, dass Sie eine Komponente oder Kategorie für den Bug auswählen, wie Rendering oder Netzwerke. Die Browser-Entwickler verwenden diese Labels, um die Arbeit zu organisieren. Wenn Sie unsicher sind, was Sie wählen sollen, machen Sie einfach das Beste daraus – jemand wird es gegebenenfalls neu zuweisen.

## Bugs für Nicht-Browser-Software melden

Wenn der Bug in einer Nicht-Browser-Software liegt, die möglicherweise in den Browser integriert ist, müssen Sie den Bug beim entsprechenden Softwareanbieter melden. Die folgende Tabelle listet einige unterstützende Technologien und deren Bug-Meldeorte auf:

| Software                                                                    | Wo melden                                                                              |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [Freedom Scientific JAWS](https://vispero.com/jaws-screen-reader-software/) | [JAWS Technical Support Form](https://support.freedomscientific.com/Forms/TechSupport) |
| [Non Visual Desktop Access (NVDA)](https://www.nvaccess.org/)               | [File NVDA bugs](https://github.com/nvaccess/nvda)                                     |
