---
title: Verlauf
slug: Web/API/History
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("History API")}}

Das **`History`** Interface der [History API](/de/docs/Web/API/History_API) erlaubt die Manipulation des Browser-_Sitzungsverlaufs_, also der Seiten, die im Tab oder Frame des aktuellen geladenen Dokuments besucht wurden.

Es gibt nur eine Instanz von `history` (es ist ein _Singleton_), die über das globale Objekt [`history`](/de/docs/Web/API/Window/history) zugänglich ist.

> [!NOTE]
> Dieses Interface ist nur im Haupt-Thread ([`Window`](/de/docs/Web/API/Window)) verfügbar. Es kann nicht in den Kontexten [`Worker`](/de/docs/Web/API/Worker) oder [`Worklet`](/de/docs/Web/API/Worklet) aufgerufen werden.

## Instanz-Eigenschaften

_Das `History` Interface erbt keine Eigenschaften._

- [`length`](/de/docs/Web/API/History/length) {{ReadOnlyInline}}
  - : Gibt eine `Integer` zurück, die die Anzahl der Elemente im Sitzungsverlauf angibt, einschließlich der aktuell geladenen Seite. Zum Beispiel gibt diese Eigenschaft für eine Seite, die in einem neuen Tab geladen wurde, `1` zurück.
- [`scrollRestoration`](/de/docs/Web/API/History/scrollRestoration)
  - : Ermöglicht Webanwendungen, das Standardverhalten der Scroll-Restaurierung bei Verlauf-Navigation explizit festzulegen. Diese Eigenschaft kann entweder `auto` oder `manual` sein.
- [`state`](/de/docs/Web/API/History/state) {{ReadOnlyInline}}
  - : Gibt einen `any` Wert zurück, der den Zustand an der Spitze des Verlaufstacks darstellt. Dies ist eine Möglichkeit, den Zustand zu betrachten, ohne auf ein [`popstate`](/de/docs/Web/API/Window/popstate_event) Ereignis warten zu müssen.

## Instanz-Methoden

_Das `History` Interface erbt keine Methoden._

- [`back()`](/de/docs/Web/API/History/back)
  - : Diese asynchrone Methode geht zur vorherigen Seite im Sitzungsverlauf, vergleichbar mit der Aktion, wenn der Benutzer die <kbd>Zurück</kbd>-Taste des Browsers klickt. Entspricht `history.go(-1)`.

    Wenn diese Methode aufgerufen wird, um über die erste Seite im Sitzungsverlauf hinaus zurückzugehen, hat dies keine Wirkung und löst keine Ausnahme aus.

- [`forward()`](/de/docs/Web/API/History/forward)
  - : Diese asynchrone Methode geht zur nächsten Seite im Sitzungsverlauf, vergleichbar mit der Aktion, wenn der Benutzer die <kbd>Vorwärts</kbd>-Taste des Browsers klickt; dies entspricht `history.go(1)`.

    Wenn diese Methode aufgerufen wird, um über die zuletzt besuchte Seite im Sitzungsverlauf hinaus vorwärts zu gehen, hat dies keine Wirkung und löst keine Ausnahme aus.

- [`go()`](/de/docs/Web/API/History/go)
  - : Lädt asynchron eine Seite aus dem Sitzungsverlauf, identifiziert durch ihre relative Position zur aktuellen Seite, zum Beispiel `-1` für die vorherige Seite oder `1` für die nächste Seite. Wenn Sie einen ungültigen Wert angeben (zum Beispiel `-1`, wenn es keine zuvor besuchten Seiten im Sitzungsverlauf gibt), hat diese Methode stillschweigend keine Wirkung. Das Aufrufen von `go()` ohne Parameter oder mit einem Wert von `0` lädt die aktuelle Seite neu.
- [`pushState()`](/de/docs/Web/API/History/pushState)
  - : Fügt die angegebenen Daten mit dem angegebenen Titel (und, falls bereitgestellt, der URL) dem Sitzungsverlauf-Stack hinzu. Die Daten werden vom DOM als undurchsichtig behandelt; Sie können jedes JavaScript-Objekt angeben, das serialisiert werden kann. Beachten Sie, dass alle Browser außer Safari derzeit den _title_-Parameter ignorieren. Für weitere Informationen siehe [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API).

- [`replaceState()`](/de/docs/Web/API/History/replaceState)
  - : Aktualisiert den zuletzt vorhandenen Eintrag im Verlaufs-Stack mit den angegebenen Daten, Titel und, falls bereitgestellt, der URL. Die Daten werden vom DOM als undurchsichtig behandelt; Sie können jedes JavaScript-Objekt angeben, das serialisiert werden kann. Beachten Sie, dass alle Browser außer Safari derzeit den _title_-Parameter ignorieren. Für weitere Informationen siehe [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`history`](/de/docs/Web/API/Window/history) globales Objekt
