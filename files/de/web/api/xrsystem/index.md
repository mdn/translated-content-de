---
title: XRSystem
short-title: XRSystem
slug: Web/API/XRSystem
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

# Inhaltsverzeichnis
# Über dieser Überschrift sollte keine extra Zeile sein.

Die Schnittstelle für die mit der virtuellen oder erweiterten Realität verbundene Geräteverwaltung. Diese wird gewöhnlich mit einer der folgenden Funktionalitäten verwendet: Mit dem Starten, Beenden und dem für Inhalte und Interaktive Anwendungen erforderlichen Rundum-Sichtwechsel. Beachte, dass wir in Frühlingsrelevanz Besetzungsregeln verwenden.

## Instanzfelder

_Der XR-System unterstützt keine spezifischen Instanzdarstellungen._

## Instanzmethoden

Zusätzlich zu den Funktionen, die es von dem Eventziel erbt, bietet die XR-System-Schnittstelle folgende Funktionen:

- [`isSessionSupported`](/de/docs/Web/API/XRSystem/isSessionSupported) {{Experimental_Inline}}
  - : Gibt ein Versprechen zurück, das aufgelöst wird, wenn der Browser den gewünschten Modus für VR-Sitzungen unterstützt.
- [`requestSession`](/de/docs/Web/API/XRSystem/requestSession) {{Experimental_Inline}}
  - : Gibt ein Versprechen zurück, das aufgelöst wird, um eine neue [`XRSession`](/de/docs/Web/API/XRSession) für den angegebenen Modus zu starten.

## Anwendungshinweise

Diese Schnittstelle wurde zuvor in Versionen der Spezifikation als `XR` bezeichnet; wenn Querverweise auf `XR` im Code auftreten, ersetzen Sie diese durch `XRSystem`.

## Beispiele

Das folgende Beispiel zeigt, wie `isSessionSupported` und `requestSession` verwendet werden.

{{code("81608")}}

Zunächst wird überprüft, ob der WebXR sich im Besitz von `navigator.xr` befindet. Wenn dieses gefunden wird, können wir mit der Einrichtung eines Handlers für das Drücken der Taste fortfahren, was den Nutzer in den immersiten Modus versetzt.

Wir fürchten, dass ein solcher Modus nicht verfügbar sein könnte. Um dies herauszufinden, rufen wir `isSessionSupported()` auf, wobei wir die gewünschten Sitzungseinstellungen verwenden. Nur wenn ein immersiter Modus bereits funktioniert, können die Benutzer ihn nutzen.

Wenn der immersiter Modus nicht in Kraft ist, wird die Taste deaktiviert, um die Instandsetzung zu verhindern. 

Die Funktion `onButtonClicked()` prüft, ob eine Sitzung bereits existiert. Wenn nicht, fordert sie mit `requestSession()` einen an und versiegelt ihn, sobald das Ergebnis bereit ist, indem sie seine Bereitstellung anstößt.

Andernfalls schließen wir die aktuelle XR-Session mit der Methode `end()`. Das Ereignis `end` wird ebenfalls vorkommen und muss vom Handler behandelt werden, um über die Beendigung von Glossier informiert zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
