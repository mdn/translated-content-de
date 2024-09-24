---
title: Verlauf
slug: Web/API/History
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("History API")}}

Das **`History`**-Interface der {{domxref("History API", "", "", "nocode")}} ermöglicht die Manipulation des Browser-_Sitzungsverlaufs_, also der Seiten, die im Tab oder Frame besucht wurden, in dem die aktuelle Seite geladen ist.

Es gibt nur eine Instanz von `history` (Es ist ein _Singleton._) zugänglich über das globale Objekt {{domxref("Window.history", "history")}}.

> [!NOTE]
> Dieses Interface steht nur im Haupt-Thread ({{domxref("Window")}}) zur Verfügung. Es kann nicht in {{domxref("Worker")}}- oder {{domxref("Worklet")}}-Kontexten aufgerufen werden.

## Instanz-Eigenschaften

_Das `History`-Interface erbt keine Eigenschaften._

- {{domxref("History.length","length")}} {{ReadOnlyInline}}
  - : Gibt eine `Integer` zurück, die die Anzahl der Elemente im Sitzungsverlauf darstellt, einschließlich der aktuell geladenen Seite. Zum Beispiel gibt diese Eigenschaft für eine in einem neuen Tab geladene Seite `1` zurück.
- {{domxref("History.scrollRestoration","scrollRestoration")}}
  - : Ermöglicht Webanwendungen, standardmäßiges Scroll-Verhalten bei Verlaufsnavigation explizit festzulegen. Diese Eigenschaft kann entweder `auto` oder `manual` sein.
- {{domxref("History.state","state")}} {{ReadOnlyInline}}
  - : Gibt einen `any`-Wert zurück, der den Zustand an der Spitze des Verlauf-Stacks darstellt. Dies ist eine Möglichkeit, den Zustand einzusehen, ohne auf ein {{domxref("Window/popstate_event", "popstate")}}-Ereignis warten zu müssen.

## Instanz-Methoden

_Das `History`_-_Interface erbt keine Methoden._

- {{domxref("History.back","back()")}}

  - : Diese asynchrone Methode geht zur vorherigen Seite im Sitzungsverlauf, die gleiche Aktion wie beim Klicken des <kbd>Zurück</kbd>-Buttons im Browser. Entspricht `history.go(-1)`.

    Das Aufrufen dieser Methode, um über die erste Seite im Sitzungsverlauf zurückzugehen, hat keine Wirkung und löst keine Ausnahme aus.

- {{domxref("History.forward","forward()")}}

  - : Diese asynchrone Methode geht zur nächsten Seite im Sitzungsverlauf, die gleiche Aktion wie beim Klicken des <kbd>Vorwärts</kbd>-Buttons im Browser; dies entspricht `history.go(1)`.

    Das Aufrufen dieser Methode, um über die zuletzt besuchte Seite im Sitzungsverlauf hinauszugehen, hat keine Wirkung und löst keine Ausnahme aus.

- {{domxref("History.go","go()")}}
  - : Lädt asynchron eine Seite aus dem Sitzungsverlauf, identifiziert durch ihre relative Position zur aktuellen Seite, zum Beispiel `-1` für die vorherige Seite oder `1` für die nächste Seite. Falls Sie einen außerhalb des Bereichs liegenden Wert angeben (zum Beispiel, `-1` anzugeben, wenn es keine zuvor besuchten Seiten im Sitzungsverlauf gibt), hat diese Methode stillschweigend keine Wirkung. Das Aufrufen von `go()` ohne Parameter oder mit einem Wert von `0` lädt die aktuelle Seite neu.
- {{domxref("History.pushState","pushState()")}}
  - : Schiebt die angegebenen Daten mit dem angegebenen Titel (und, falls bereitgestellt, URL) auf den Sitzungsverlauf-Stack. Die Daten werden vom DOM als undurchsichtig behandelt; Sie können jedes JavaScript-Objekt angeben, das serialisiert werden kann. Beachten Sie, dass alle Browser außer Safari derzeit den _title_-Parameter ignorieren. Weitere Informationen finden Sie unter [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API).
- {{domxref("History.replaceState","replaceState()")}}
  - : Aktualisiert den letzten Eintrag im Verlaufs-Stack, um die angegebenen Daten, den Titel und, falls bereitgestellt, die URL zu enthalten. Die Daten werden vom DOM als undurchsichtig behandelt; Sie können jedes JavaScript-Objekt angeben, das serialisiert werden kann. Beachten Sie, dass alle Browser außer Safari derzeit den _title_-Parameter ignorieren. Weitere Informationen finden Sie unter [Arbeiten mit der History API](/de/docs/Web/API/History_API/Working_with_the_History_API).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Window.history", "history")}} globales Objekt
