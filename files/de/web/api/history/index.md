---
title: History
slug: Web/API/History
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("History API")}}

Das **`History`** Interface der [History API](/de/docs/Web/API/History_API) ermöglicht die Manipulation des Browser-_Sitzungsverlaufs_, also der in dem Tab oder Frame besuchten Seiten, in dem die aktuelle Seite geladen ist.

Es gibt nur eine Instanz von `history` (Es ist ein _Singleton_), auf die über das globale Objekt [`history`](/de/docs/Web/API/Window/history) zugegriffen werden kann.

> [!NOTE]
> Dieses Interface ist nur im Hauptthread ([`Window`](/de/docs/Web/API/Window)) verfügbar. Es kann nicht in [`Worker`](/de/docs/Web/API/Worker) oder [`Worklet`](/de/docs/Web/API/Worklet) Kontexten aufgerufen werden.

## Instanzattribute

_Das `History` Interface erbt keine Attribute._

- [`length`](/de/docs/Web/API/History/length) {{ReadOnlyInline}}
  - : Gibt eine `Integer`-Zahl zurück, die die Anzahl der Elemente im Sitzungsverlauf darstellt, einschließlich der aktuell geladenen Seite. Zum Beispiel gibt diese Eigenschaft für eine Seite, die in einem neuen Tab geladen wurde, `1` zurück.
- [`scrollRestoration`](/de/docs/Web/API/History/scrollRestoration)
  - : Ermöglicht es Webanwendungen, das Standardverhalten der Wiederherstellung des Scroll-Status bei Navigationsvorgängen im Verlauf explizit festzulegen. Diese Eigenschaft kann entweder `auto` oder `manual` sein.
- [`state`](/de/docs/Web/API/History/state) {{ReadOnlyInline}}
  - : Gibt einen `any`-Wert zurück, der den Zustand an der Spitze des Verlauf-Stacks darstellt. Dies ist eine Möglichkeit, sich den Zustand anzusehen, ohne auf ein [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis warten zu müssen.

## Instanzmethoden

_Das `History` Interface erbt keine Methoden._

- [`back()`](/de/docs/Web/API/History/back)

  - : Diese asynchrone Methode geht zur vorherigen Seite im Sitzungsverlauf, dieselbe Aktion, als würde der Benutzer auf die <kbd>Zurück</kbd>-Schaltfläche des Browsers klicken. Entspricht `history.go(-1)`.

    Wenn diese Methode aufgerufen wird, um über die erste Seite im Sitzungsverlauf hinaus zurückzugehen, hat dies keine Auswirkung und löst keine Ausnahme aus.

- [`forward()`](/de/docs/Web/API/History/forward)

  - : Diese asynchrone Methode geht zur nächsten Seite im Sitzungsverlauf, dieselbe Aktion, als würde der Benutzer auf die <kbd>Weiter</kbd>-Schaltfläche des Browsers klicken; das entspricht `history.go(1)`.

    Wenn diese Methode aufgerufen wird, um über die letzte Seite im Sitzungsverlauf hinaus weiterzugehen, hat dies keine Auswirkung und löst keine Ausnahme aus.

- [`go()`](/de/docs/Web/API/History/go)
  - : Lässt eine Seite aus dem Sitzungsverlauf asynchron laden, identifiziert durch ihre relative Position zur aktuellen Seite, zum Beispiel `-1` für die vorherige Seite oder `1` für die nächste Seite. Wenn Sie einen Wert außerhalb des gültigen Bereichs angeben (zum Beispiel `-1`, wenn es keine zuvor besuchten Seiten im Sitzungsverlauf gibt), hat diese Methode stillschweigend keine Wirkung. Ein Aufruf von `go()` ohne Parameter oder mit einem Wert von `0` lädt die aktuelle Seite neu.
- [`pushState()`](/de/docs/Web/API/History/pushState)
  - : Fügt die angegebenen Daten mit dem spezifizierten Titel (und, falls angegeben, URL) dem Sitzungsverlauf-Stack hinzu. Die Daten werden vom DOM als undurchsichtig behandelt; Sie können jedes JavaScript-Objekt angeben, das serialisiert werden kann. Beachten Sie, dass alle Browser außer Safari derzeit den _title_-Parameter ignorieren. Für weitere Informationen siehe [Working with the History API](/de/docs/Web/API/History_API/Working_with_the_History_API).
- [`replaceState()`](/de/docs/Web/API/History/replaceState)
  - : Aktualisiert den zuletzt im Verlauf-Stack gespeicherten Eintrag mit den angegebenen Daten, dem Titel, und, falls angegeben, der URL. Die Daten werden vom DOM als undurchsichtig behandelt; Sie können jedes JavaScript-Objekt angeben, das serialisiert werden kann. Beachten Sie, dass alle Browser außer Safari derzeit den _title_-Parameter ignorieren. Für weitere Informationen siehe [Working with the History API](/de/docs/Web/API/History_API/Working_with_the_History_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Globales Objekt [`history`](/de/docs/Web/API/Window/history)
