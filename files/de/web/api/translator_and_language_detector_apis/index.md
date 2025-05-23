---
title: Translator and Language Detector APIs
slug: Web/API/Translator_and_Language_Detector_APIs
l10n:
  sourceCommit: 19e7cdb9bbf52c909ba417c88e768fb287c38ad1
---

{{SeeCompatTable}}{{DefaultAPISidebar("Translator and Language Detector APIs")}}

Die **Übersetzungs- und Spracherkennungs-APIs** bieten Funktionen zur Erkennung der Sprache, in der ein Text geschrieben ist, und zur Übersetzung von Texten in verschiedene Sprachen über das interne KI-Modell eines Browsers (was sich je nach Browser unterscheiden kann).

## Konzepte und Nutzung

Die Übersetzung von Texten ist eine häufige Aufgabe im heutigen Internet. Typische Anwendungsfälle umfassen:

- Die sofortige Übersetzung eines Artikels, der in Ihrer Sprache nicht verfügbar ist.
- Die Übersetzung der Supportanfragen eines Benutzers in eine Sprache, die der Support-Mitarbeiter versteht.
- Die Ermöglichung von Chats zwischen Benutzern, die nicht die Sprache des jeweils anderen sprechen.

Die Erkennung der Sprache eines Textes ist eine wichtige Voraussetzung für eine erfolgreiche automatisierte Übersetzung, hat aber auch andere Anwendungsbereiche als die direkte Übersetzung. Zum Beispiel ermöglicht sie die automatische Konfiguration der Benutzeroberfläche basierend auf der Benutzereingabe, von der Aktualisierung der Benutzeroberfläche und Fehlermeldungen bis hin zum automatischen Laden geeigneter Wörterbücher für die Rechtschreibprüfung oder die Erkennung von Schimpfwörtern.

KI eignet sich gut zur Erleichterung der Spracherkennung und -übersetzung. Die Übersetzungs- und Spracherkennungs-APIs bieten asynchrone ({{jsxref("Promise")}}-basierte) Mechanismen für eine Website zur Spracherkennung und Textübersetzung über das interne KI-Modell des Browsers. Dies ist nützlich und effizient, da der Browser den Dienst übernimmt, anstatt dass der Entwickler darauf angewiesen ist, dass der Benutzer KI-Modelle herunterlädt oder einen cloudbasierten Übersetzungsdienst hostet oder bezahlt.

- Die Spracherkennung erfolgt über das [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Interface. Ein `LanguageDetector`-Objekt wird mit der statischen Methode [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static) erstellt, dann wird die Instanzmethode [`detect()`](/de/docs/Web/API/LanguageDetector/detect) mit dem zu erkennenden Textzeichenfolge übergeben.
- Die Übersetzung erfolgt über das [`Translator`](/de/docs/Web/API/Translator)-Interface. Ein `Translator`-Objekt wird mit der statischen Methode [`Translator.create()`](/de/docs/Web/API/Translator/create_static) erstellt, dann wird die Instanzmethode [`translate()`](/de/docs/Web/API/Translator/translate) mit der zu übersetzenden Textzeichenfolge übergeben.

Sie können auch ausstehende Operationen mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen.

Die `Translator`- und `LanguageDetector`-Instanzen verbrauchen viele Ressourcen, daher wird empfohlen, sie mit der Instanzmethode `destroy()` zu entfernen, sobald Sie fertig sind (zum Beispiel [`Translator.destroy()`](/de/docs/Web/API/Translator/destroy)).

Sehen Sie sich die [Verwendung der Übersetzungs- und Spracherkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using) für eine Anleitung zur Nutzung der APIs an.

## Schnittstellen

- [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) {{Experimental_Inline}}
  - : Beinhaltet alle Funktionen zur Spracherkennung, einschließlich der Überprüfung der Verfügbarkeit des KI-Modells, der Erstellung einer neuen `LanguageDetector`-Instanz, deren Verwendung zur Erkennung einer Sprache und mehr.
- [`Translator`](/de/docs/Web/API/Translator) {{Experimental_Inline}}
  - : Beinhaltet alle Übersetzungsfunktionen, einschließlich der Überprüfung der Verfügbarkeit des KI-Modells, der Erstellung einer neuen `Translator`-Instanz, deren Verwendung zur Erstellung einer Übersetzung und mehr.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; die {{httpheader("Permissions-Policy/language-detector", "language-detector")}}-Direktive
  - : Steuert den Zugriff auf die Spracherkennungsfunktionalität. Wenn eine Richtlinie deren Verwendung ausdrücklich untersagt, schlägt jeder Versuch, die `LanguageDetector`-Methoden aufzurufen, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehl.
- {{httpheader("Permissions-Policy")}}; die {{httpheader("Permissions-Policy/translator", "translator")}}-Direktive
  - : Steuert den Zugriff auf die Übersetzungsfunktionalität. Wenn eine Richtlinie deren Verwendung ausdrücklich untersagt, schlägt jeder Versuch, die `Translator`-Methoden aufzurufen, mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Sicherheitsüberlegungen

Die Erstellung von `LanguageDetector`- und `Translator`-Objekten setzt voraus, dass der Benutzer kürzlich mit der Seite interagiert hat ([vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich).

Der Zugriff auf die API wird auch durch die {{httpheader("Permissions-Policy/language-detector", "language-detector")}}- und {{httpheader("Permissions-Policy/translator", "translator")}}-{{httpheader("Permissions-Policy")}}-Direktiven gesteuert.

## Beispiele

Für ein vollständiges Beispiel siehe [Verwendung der Übersetzungs- und Spracherkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spracherkennung mit integrierter KI](https://developer.chrome.com/docs/ai/language-detection) auf developer.chrome.com (2025)
- [Übersetzung mit integrierter KI](https://developer.chrome.com/docs/ai/translator-api) auf developer.chrome.com (2025)
