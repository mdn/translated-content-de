---
title: Window
slug: Web/API/Window
l10n:
  sourceCommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{APIRef("DOM")}}

Die **`Window`**-Schnittstelle repräsentiert ein Fenster, das ein {{Glossary("DOM", "DOM")}}-Dokument enthält; die `document`-Eigenschaft verweist auf das im Fenster geladene [DOM-Dokument](/de/docs/Web/API/Document).

Ein Fenster für ein bestimmtes Dokument kann mit der Eigenschaft [`document.defaultView`](/de/docs/Web/API/Document/defaultView) abgerufen werden.

Eine globale Variable, `window`, die das Fenster repräsentiert, in dem das Skript ausgeführt wird, wird in JavaScript-Code zugänglich gemacht.

Die `Window`-Schnittstelle beherbergt eine Vielzahl von Funktionen, Namespaces, Objekten und Konstruktoren, die nicht unbedingt direkt mit dem Konzept eines Benutzeroberflächenfensters verbunden sind. Dennoch ist die `Window`-Schnittstelle ein geeigneter Ort, um diese global verfügbaren Elemente zu platzieren. Viele dieser Elemente sind in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) und der [DOM-Referenz](/de/docs/Web/API/Document_Object_Model) dokumentiert.

In einem Browser mit Registerkarten wird jede Registerkarte durch ihr eigenes `Window`-Objekt dargestellt; das globale `window`, das von JavaScript-Code in einer bestimmten Registerkarte referenziert wird, repräsentiert immer die Registerkarte, in der der Code läuft. Dennoch gelten auch in einem Browser mit Registerkarten einige Eigenschaften und Methoden für das übergeordnete Fenster, das die Registerkarte enthält, wie z. B. [`resizeTo()`](/de/docs/Web/API/Window/resizeTo) und [`innerHeight`](/de/docs/Web/API/Window/innerHeight). Allgemein gesagt, betrifft alles, was nicht sinnvoll einer Registerkarte zugeordnet werden kann, das Fenster als Ganzes.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt Eigenschaften von der Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

Beachten Sie, dass Eigenschaften, die Objekte sind (z. B. zum Überschreiben des Prototyps von integrierten Elementen), in einem separaten Abschnitt unten aufgeführt sind.

- [`Window.caches`](/de/docs/Web/API/Window/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Ressourcen für die Offline-Nutzung und das Generieren benutzerdefinierter Antworten auf Anfragen.
- [`Window.clientInformation`](/de/docs/Web/API/Window/navigator) {{ReadOnlyInline}}
  - : Ein Alias für [`Window.navigator`](/de/docs/Web/API/Window/navigator).
- [`Window.closed`](/de/docs/Web/API/Window/closed) {{ReadOnlyInline}}
  - : Diese Eigenschaft zeigt an, ob das aktuelle Fenster geschlossen ist oder nicht.
- [`Window.console`](/de/docs/Web/API/Window/console) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Console-Objekt zurück, das Zugriff auf die Debug-Konsole des Browsers bietet.
- [`Window.cookieStore`](/de/docs/Web/API/Window/cookieStore) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt für den aktuellen Dokumentkontext zurück.
- [`Window.credentialless`](/de/docs/Web/API/Window/credentialless) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das aktuelle Dokument innerhalb eines `credentialless` {{htmlelement("iframe")}} geladen wurde. Weitere Informationen finden Sie unter [IFrame credentialless](/de/docs/Web/Security/IFrame_credentialless).
- [`Window.crossOriginIsolated`](/de/docs/Web/API/Window/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die Website in einem Zustand der Cross-Origin-Isolierung ist.
- [`Window.crypto`](/de/docs/Web/API/Window/crypto) {{ReadOnlyInline}}
  - : Gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück, das mit dem globalen Objekt verbunden ist.
- [`Window.customElements`](/de/docs/Web/API/Window/customElements) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt zurück, welches zur Registrierung neuer [benutzerdefinierter Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) und zur Abfrage von Informationen über vorher registrierte benutzerdefinierte Elemente verwendet werden kann.
- [`Window.devicePixelRatio`](/de/docs/Web/API/Window/devicePixelRatio) {{ReadOnlyInline}}
  - : Gibt das Verhältnis zwischen physischen Pixeln und geräteunabhängigen Pixeln im aktuellen Display zurück.
- [`Window.document`](/de/docs/Web/API/Window/document) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Dokument zurück, das das Fenster enthält.
- [`Window.documentPictureInPicture`](/de/docs/Web/API/Window/documentPictureInPicture) {{ReadOnlyInline}} {{experimental_inline}} {{SecureContext_Inline}}
  - : Gibt ein Referenzobjekt für das [Document Picture-in-Picture](/de/docs/Web/API/Document_Picture-in-Picture_API) im aktuellen Dokumentkontext zurück.
  <!-- Aufgrund der Länge wurde der Text hier gekürzt. Sollte der Rest erforderlich sein, geben Sie bitte Bescheid. -->

Diese Eigenschaften und weitere Methoden des `Window`-Interfaces bieten die Möglichkeit, umfassend mit Fenstern, Rahmen und globalen Skript-Objekten zu interagieren.
