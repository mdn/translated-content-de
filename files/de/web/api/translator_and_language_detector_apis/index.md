---
title: Translator and Language Detector APIs
slug: Web/API/Translator_and_Language_Detector_APIs
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{DefaultAPISidebar("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **Translator- und Sprachenerkennungs-APIs** bieten Funktionalitäten, um die Sprache von Texten zu erkennen und Texte in verschiedene Sprachen zu übersetzen, mittels des internen KI-Modells eines Browsers (das zwischen den Browsern variieren kann).

## Konzepte und Nutzung

Die Übersetzung eines Textkorpus ist eine häufige Aufgabe im heutigen Web. Typische Anwendungsfälle sind:

- Die sofortige Übersetzung eines Artikels, der nicht in Ihrer Sprache verfügbar ist.
- Die Übersetzung von Benutzeranfragen in eine Sprache, die der Support-Agent versteht.
- Die Ermöglichung von Chats zwischen Benutzern, die nicht die gleiche Sprache sprechen.

Die Erkennung der Sprache eines Textkorpus ist eine wichtige Voraussetzung für eine erfolgreiche automatische Übersetzung, hat aber auch andere Anwendungen jenseits der direkten Übersetzung. Zum Beispiel ermöglicht sie die automatische Konfiguration der Benutzeroberfläche basierend auf der Texteingabe des Benutzers, angefangen von der Aktualisierung von UI- und Fehlermeldungstexten bis hin zum automatischen Laden geeigneter Wörterbücher für die Rechtschreibprüfung oder Fluchworterkennung.

KI eignet sich gut zur Unterstützung der Spracherkennung und Übersetzung. Die Translator- und Sprachenerkennungs-APIs bieten asynchrone ({{jsxref("Promise")}}-basierte) Mechanismen für eine Website, um Sprachen zu erkennen und Texte über das eigene interne KI-Modell des Browsers zu übersetzen. Dies ist nützlich und effizient, da der Browser den Dienst verarbeitet und nicht der Entwickler darauf angewiesen ist, dass der Benutzer KI-Modelle herunterlädt, oder dass der Entwickler einen cloudbasierten Übersetzungsdienst hosten oder dafür bezahlen muss.

- Die Spracherkennung erfolgt über das [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Interface. Eine Instanz eines `LanguageDetector`-Objekts wird mit der statischen Methode [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static) erstellt, dann wird die Instanzmethode [`detect()`](/de/docs/Web/API/LanguageDetector/detect) aufgerufen, um die Sprache für den zu erkennenden Text zu übermitteln.
- Die Übersetzung erfolgt über das [`Translator`](/de/docs/Web/API/Translator)-Interface. Eine Instanz eines `Translator`-Objekts wird mit der statischen Methode [`Translator.create()`](/de/docs/Web/API/Translator/create_static) erstellt, dann wird die Instanzmethode [`translate()`](/de/docs/Web/API/Translator/translate) aufgerufen, um den zu übersetzenden Text zu übermitteln.

Sie können eine ausstehende `create()`, `detect()`, oder `translate()`-Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen.

Nachdem eine `LanguageDetector`- oder `Translator`-Instanz erstellt wurde, können Sie ihre zugewiesenen Ressourcen freigeben und jegliche weitere Aktivität stoppen, indem Sie ihre Methoden [`LanguageDetector.destroy()`](/de/docs/Web/API/LanguageDetector/destroy)/[`Translator.destroy()`](/de/docs/Web/API/Translator/destroy) aufrufen. Es wird empfohlen, dies zu tun, nachdem Sie das Objekt nicht mehr benötigen, da es viele Ressourcen verbrauchen kann.

Siehe [Verwendung der Translator- und Sprachenerkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using) für eine Anleitung zur Verwendung der APIs.

## Schnittstellen

- [`CreateMonitor`](/de/docs/Web/API/CreateMonitor) {{Experimental_Inline}}
  - : Bietet Informationen über den Fortschritt eines KI-Modelldownloads, zum Beispiel eines Sprachpakets oder einiger Feinabstimmungsdaten.
- [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) {{Experimental_Inline}}
  - : Enthält alle Funktionen zur Spracherkennung, einschließlich der Überprüfung der Verfügbarkeit des KI-Modells, der Erstellung einer neuen `LanguageDetector`-Instanz, der Verwendung zur Spracherkennung und mehr.
- [`Translator`](/de/docs/Web/API/Translator) {{Experimental_Inline}}
  - : Enthält alle Übersetzungsfunktionen, einschließlich der Überprüfung der Verfügbarkeit des KI-Modells, der Erstellung einer neuen `Translator`-Instanz, der Verwendung zur Erstellung einer Übersetzung und mehr.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; die {{httpheader("Permissions-Policy/language-detector", "language-detector")}}-Direktive
  - : Kontrolliert den Zugang zur Spracherkennungsfunktionalität.
    Wo eine Richtlinie die Nutzung speziell untersagt, wird die statische Methode [`LanguageDetector.availability()`](/de/docs/Web/API/LanguageDetector/availability_static) `unavailable` zurückgeben, und alle Versuche, andere `LanguageDetector`-Methoden aufzurufen, werden mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.
- {{httpheader("Permissions-Policy")}}; die {{httpheader("Permissions-Policy/translator", "translator")}}-Direktive
  - : Kontrolliert den Zugang zur Übersetzungsfunktionalität.
    Wo eine Richtlinie die Nutzung speziell untersagt, wird die statische Methode [`Translator.availability()`](/de/docs/Web/API/Translator/availability_static) `unavailable` zurückgeben, und alle Versuche, andere `Translator`-Methoden aufzurufen, werden mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

## Sicherheitsüberlegungen

Die Erstellung von `LanguageDetector`- und `Translator`-Objekten erfordert, dass der Benutzer kürzlich mit der Seite interagiert hat ([transitorische Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich).

Der Zugriff auf die API wird ebenfalls über die {{httpheader("Permissions-Policy/language-detector", "language-detector")}} und {{httpheader("Permissions-Policy/translator", "translator")}} {{httpheader("Permissions-Policy")}}-Direktiven gesteuert.

## Beispiele

Für ein vollständiges Beispiel siehe [Verwendung der Translator- und Sprachenerkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spracherkennung mit integrierter KI](https://developer.chrome.com/docs/ai/language-detection) auf developer.chrome.com (2025)
- [Übersetzung mit integrierter KI](https://developer.chrome.com/docs/ai/translator-api) auf developer.chrome.com (2025)
