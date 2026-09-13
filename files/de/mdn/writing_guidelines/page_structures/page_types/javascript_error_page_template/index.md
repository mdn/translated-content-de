---
title: Vorlage für JavaScript-Fehlerseiten
slug: MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_error_page_template
l10n:
  sourceCommit: 4c5b1bd7b5f9142c4c53ab6321e19bfdfaf1ddda
---

> [!NOTE]
> _Entfernen Sie diese gesamte erklärende Notiz vor der Veröffentlichung_
>
> ---
>
> **Front Matter der Seite:**
>
> Das Front Matter am Anfang der Seite wird verwendet, um „Seitenmetadaten“ zu definieren. Die Werte sollten entsprechend für den jeweiligen Fehler aktualisiert werden.
>
> ```md
> ---
> title: "TypeOfError: message of error"
> slug: Web/JavaScript/Reference/Errors/Message_of_error
> page-type: javascript-error
> sidebar: jssidebar
> ---
> ```
>
> - **title**
>   - : Überschrift, die oben auf der Seite angezeigt wird. Formatieren Sie sie als `TypeOfError: message of error`. Zum Beispiel der Fehler [SyntaxError: await is only valid in async functions, async generators and modules](/de/docs/Web/JavaScript/Reference/Errors/Bad_await). Die Fehlermeldung sollte die Fehlermeldung in Firefox widerspiegeln. Wenn die Fehlermeldung einen Platzhalter wie einen Bezeichner enthält, verwenden Sie einen beliebigen Namen wie `x`. Verwenden Sie nicht `{0}` wie im Firefox-Quellcode.
> - **slug**
>   - : Das Ende des URL-Pfads nach `https://developer.mozilla.org/de/docs/`. Dies sollte wie `Web/JavaScript/Reference/Errors/Message_of_error` formatiert sein. In der Regel kann es einfach durch Ersetzen von Leerzeichen im Titel durch Unterstriche gebildet werden. Manchmal ist die Fehlermeldung jedoch zu lang; verwenden Sie in diesem Fall Ihr Ermessen und kürzen Sie sie. Auch die Anpassung des Firefox-Fehlercodes wie `JSMSG_INCOMPATIBLE_PROTO` zu `Incompatible_proto` ist akzeptabel, jedoch weniger empfohlen.
> - **page-type**
>   - : Der Schlüssel `page-type` für JavaScript-Fehler ist `javascript-error`.
> - **sidebar**
>   - : Dies ist `jssidebar` für JavaScript-Fehlerseiten.
>     Einzelheiten finden Sie unter [Seitenstrukturen: Sidebars](/de/docs/MDN/Writing_guidelines/Page_structures/Sidebars).
>
> Beachten Sie, dass Informationen zur Browser-Kompatibilität und zu Spezifikationen für Fehlerseiten irrelevant sind.
>
> _Denken Sie daran, diese gesamte erklärende Notiz vor der Veröffentlichung zu entfernen._

> [!NOTE]
> Denken Sie an das wichtigste Prinzip für das Schreiben konsistenter JavaScript-Referenzseiten: **sehen Sie sich um**! Viele verwandte Seiten haben einheitliche Strukturen, die über die Anforderungen dieser Vorlage hinausgehen. Beispielsweise alle Proxy-Handler, die meisten Array-Methoden usw. Beginnen Sie damit, nach vorhandener Dokumentation für ähnliche APIs zu suchen, und kopieren Sie deren Struktur.

Die JavaScript-Ausnahme „message of error“ tritt auf, wenn …

## Meldung

```plain
TypeOfError: message of error as in V8 (V8-based)
TypeOfError: message of error as in SM (Firefox)
TypeOfError: message of error as in JSC (Safari)
```

Wenn zwei Engines dieselbe Fehlermeldung verwenden, führen Sie sie in der folgenden Reihenfolge auf:

- Die erste Zeile zeigt immer, was V8 anzeigt. Andere Engines können in Klammern aufgeführt werden, etwa „(V8-basiert & Safari)“.
- Die zweite Zeile zeigt immer, was Firefox anzeigt, sofern sie nicht bereits in der ersten Zeile enthalten ist. In diesem Fall zeigt die zweite Zeile, was Safari anzeigt.

Wenn eine Fehlermeldung in Firefox mehreren Fehlermeldungen in anderen Engines entspricht, führen Sie alle entsprechenden Fehlermeldungen der anderen Engines in aufeinanderfolgenden Zeilen auf.

```plain
TypeOfError: message of error as in V8 1 (V8-based)
TypeOfError: message of error as in V8 2 (V8-based)
TypeOfError: message of error as in SM (Firefox)
TypeOfError: message of error as in JSC 1 (Safari)
TypeOfError: message of error as in JSC 2 (Safari)
```

Wenn es in Firefox zwei sehr ähnliche Fehlermeldungen gibt, können Sie auch beide auf derselben Fehlerseite dokumentieren. Platzieren Sie in diesem Fall jede Firefox-Fehlermeldung in ihrer eigenen Gruppe:

```plain
TypeOfError: message of error as in V8 1 (V8-based)
TypeOfError: message of error as in SM 1 (Firefox)
TypeOfError: message of error as in JSC 1 (Safari)

TypeOfError: message of error as in V8 2 (V8-based)
TypeOfError: message of error as in SM 2 (Firefox)
TypeOfError: message of error as in JSC 2 (Safari)
```

Im Wesentlichen sind die Fehlerreferenzen nach Firefox-Fehlermeldungen strukturiert; Fehlermeldungen anderer Engines dienen lediglich der Information.

## Fehlertyp

\\{{jsxref("TypeOfError")}}.

## Was ist schiefgelaufen?

Ein oder zwei Absätze, die erklären, was Sie möglicherweise falsch machen, warum JavaScript dies für eine schlechte Idee hält und welche möglichen Lösungen es gibt.

## Beispiele

Beachten Sie, dass wir den Plural „Beispiele“ verwenden, selbst wenn die Seite nur ein Beispiel enthält.

### Eine beschreibende Überschrift

Anders als auf anderen Seiten sind H3-Überschriften für Fehlerseiten nicht zwingend erforderlich. Manchmal gibt es nur ein Szenario, in dem der Fehler auftreten kann. In diesem Fall ist es in Ordnung, die H3-Überschrift wegzulassen und stattdessen mit Fließtext zu erläutern, was geschieht. Verwenden Sie Überschriften, wenn es mehrere mögliche Ursachen für den Fehler gibt. Die Überschrift sollte beschreiben, was das Beispiel tut. Beispielsweise sagt „Ein einfaches Beispiel“ nichts über das Beispiel aus und ist daher keine gute Überschrift. Die Überschrift sollte prägnant sein.

Weitere Informationen finden Sie in unserem Leitfaden zum Hinzufügen von [Codebeispielen](/de/docs/MDN/Writing_guidelines/Page_structures/Code_examples).

Beachten Sie, dass es bei Fehlern häufig sinnvoll ist, `example-bad` und `example-good` zu verwenden. Zum Beispiel:

Folgendes könnten Sie tun:

```js example-bad
// Your bad code here
```

Ziehen Sie in Betracht, es wie folgt zu ändern:

```js example-good
// Fixed good code here
```

## Siehe auch

Fügen Sie Links zu Referenzseiten und Leitfäden hinzu, die sich auf den aktuellen Fehler beziehen. Weitere Richtlinien finden Sie im [Abschnitt „Siehe auch“](/de/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) im _Leitfaden zum Schreibstil_.

- link1
- link2
- external_link (year)
