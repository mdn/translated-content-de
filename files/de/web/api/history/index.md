---
title: History
slug: Web/API/History
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("History API")}}

Das **`History`**-Interface der [History API](/de/docs/Web/API/History_API) ermöglicht die Manipulation der _Sitzungsverlaufsgeschichte_ des Browsers, also der Seiten, die im Tab oder Frame besucht wurden, in dem die aktuelle Seite geladen ist.

Es gibt nur eine Instanz von `history` (es ist ein _Singleton_), die über das globale Objekt [`history`](/de/docs/Web/API/Window/history) zugänglich ist.

> [!NOTE]
> Dieses Interface ist nur im Haupt-Thread ([`Window`](/de/docs/Web/API/Window)) verfügbar. Es kann in [`Worker`](/de/docs/Web/API/Worker)- oder [`Worklet`](/de/docs/Web/API/Worklet)-Kontexten nicht zugegriffen werden.

## Instanzeigenschaften

_Das `History`-Interface erbt keine Eigenschaften._

- [`length`](/de/docs/Web/API/History/length) {{ReadOnlyInline}}
  - : Gibt einen `Integer` zurück, der die Anzahl der Elemente im Sitzungsverlauf darstellt, einschließlich der aktuell geladenen Seite. Beispielsweise gibt diese Eigenschaft für eine in einem neuen Tab geladene Seite `1` zurück.
- [`scrollRestoration`](/de/docs/Web/API/History/scrollRestoration)
  - : Ermöglicht Webanwendungen, das Standardverhalten der Bildlaufwiederherstellung bei Verlaufnavigation explizit festzulegen. Diese Eigenschaft kann entweder `auto` oder `manual` sein.
- [`state`](/de/docs/Web/API/History/state) {{ReadOnlyInline}}
  - : Gibt einen `any`-Wert zurück, der den Zustand am oberen Ende des Verlaufsstapels darstellt. Dies ist eine Möglichkeit, sich den Zustand anzusehen, ohne auf ein [`popstate`](/de/docs/Web/API/Window/popstate_event)-Ereignis warten zu müssen.

## Instanzmethoden

_Das `History`-Interface erbt keine Methoden._

- [`back()`](/de/docs/Web/API/History/back)

  - : Diese asynchrone Methode geht zur vorherigen Seite im Sitzungsverlauf zurück, wobei dieselbe Aktion ausgeführt wird, wie wenn der Benutzer auf die <kbd>Zurück</kbd>-Schaltfläche des Browsers klickt. Entspricht `history.go(-1)`.

    Der Aufruf dieser Methode, um über die erste Seite im Sitzungsverlauf hinaus zurückzugehen, hat keine Wirkung und löst keine Ausnahme aus.

- [`forward()`](/de/docs/Web/API/History/forward)

  - : Diese asynchrone Methode geht zur nächsten Seite im Sitzungsverlauf weiter, wobei dieselbe Aktion ausgeführt wird, wie wenn der Benutzer auf die <kbd>Vorwärts</kbd>-Schaltfläche des Browsers klickt; dies entspricht `history.go(1)`.

    Der Aufruf dieser Methode, um über die jüngste Seite im Sitzungsverlauf hinaus vorwärts zu gehen, hat keine Wirkung und löst keine Ausnahme aus.

- [`go()`](/de/docs/Web/API/History/go)
  - : Lädt asynchron eine Seite aus dem Sitzungsverlauf, identifiziert durch ihre relative Position zur aktuellen Seite, z.B. `-1` für die vorherige Seite oder `1` für die nächste Seite. Wenn Sie einen ungültigen Wert angeben (z.B. `-1`, wenn es keine zuvor besuchten Seiten im Sitzungsverlauf gibt), hat diese Methode stillschweigend keine Wirkung. Der Aufruf von `go()` ohne Parameter oder mit dem Wert `0` lädt die aktuelle Seite neu.
- [`pushState()`](/de/docs/Web/API/History/pushState)
  - : Schiebt die angegebenen Daten mit dem angegebenen Titel (und, falls bereitgestellt, URL) auf den Sitzungsverlaufsstapel. Die Daten werden vom DOM als opak behandelt; Sie können jedes JavaScript-Objekt angeben, das serialisiert werden kann. Beachten Sie, dass alle Browser außer Safari derzeit den _title_-Parameter ignorieren. Weitere Informationen finden Sie unter [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API).
- [`replaceState()`](/de/docs/Web/API/History/replaceState)
  - : Aktualisiert den letzten Eintrag im Verlaufsstapel mit den angegebenen Daten, dem Titel und, falls bereitgestellt, der URL. Die Daten werden vom DOM als opak behandelt; Sie können jedes JavaScript-Objekt angeben, das serialisiert werden kann. Beachten Sie, dass alle Browser außer Safari derzeit den _title_-Parameter ignorieren. Weitere Informationen finden Sie unter [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Globales Objekt [`history`](/de/docs/Web/API/Window/history)
