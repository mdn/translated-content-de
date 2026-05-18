---
title: Translator and Language Detector APIs
slug: Web/API/Translator_and_Language_Detector_APIs
l10n:
  sourceCommit: 8cae6b8c772e3f9ce2fbd73cad17fcb0adda966f
---

{{DefaultAPISidebar("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **Translator- und Sprachenerkennungs-APIs** bieten Funktionen zur Erkennung der Sprache, in der ein Text geschrieben ist, sowie zur Übersetzung von Texten in verschiedene Sprachen über ein internes KI-Modell des Browsers (das sich zwischen den Browsern unterscheiden kann).

## Konzepte und Nutzung

Die Übersetzung eines Textkörpers ist eine gängige Aufgabe im heutigen Web. Typische Anwendungsfälle umfassen:

- Sofortige Übersetzung eines Artikels, der nicht in Ihrer Sprache verfügbar ist.
- Übersetzung von Kundenanfragen in eine Sprache, die der Support-Mitarbeiter versteht.
- Ermöglichung von Chats zwischen Benutzern, die nicht die Sprache des jeweils anderen sprechen.

Die Erkennung der Sprache eines Textkörpers ist ein wichtiger Vorläufer für eine erfolgreiche automatisierte Übersetzung, hat jedoch auch andere Verwendungszwecke jenseits der direkten Übersetzung. Zum Beispiel ermöglicht sie die automatische Konfiguration der Benutzeroberfläche basierend auf der Texteingabe des Benutzers, angefangen vom Aktualisieren von Benutzeroberfläche und Fehlermeldungen bis hin zum automatischen Laden geeigneter Wörterbücher zur Rechtschreibprüfung oder zur Erkennung von Schimpfwörtern.

KI eignet sich hervorragend zur Unterstützung der Sprachenerkennung und Übersetzung. Die Translator- und Sprachenerkennungs-APIs bieten asynchrone ({{jsxref("Promise")}}-basierte) Mechanismen für eine Website, um Sprachen zu erkennen und Texte über das interne KI-Modell des Browsers zu übersetzen. Dies ist nützlich und effizient, da der Browser den Dienst verwaltet, anstatt dass der Entwickler darauf angewiesen ist, dass der Benutzer KI-Modelle herunterlädt oder einen cloudbasierten Übersetzungsdienst hostet oder dafür bezahlt.

- Die Sprachenerkennung erfolgt über das [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Interface. Eine Instanz des Objekts `LanguageDetector` wird mit der statischen Methode [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static) erstellt, dann wird die Instanzmethode [`detect()`](/de/docs/Web/API/LanguageDetector/detect) mit dem Textstring übergeben, für den die Sprache erkannt werden soll.
- Die Übersetzung erfolgt über das [`Translator`](/de/docs/Web/API/Translator)-Interface. Eine Instanz des Objekts `Translator` wird mit der statischen Methode [`Translator.create()`](/de/docs/Web/API/Translator/create_static) erstellt, dann wird die Instanzmethode [`translate()`](/de/docs/Web/API/Translator/translate) mit dem zu übersetzenden Textstring übergeben.

Sie können eine ausstehende `create()`, `detect()`, oder `translate()`-Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen.

Nachdem eine Instanz von `LanguageDetector` oder `Translator` erstellt wurde, können Sie die zugewiesenen Ressourcen freigeben und jegliche weitere Aktivität stoppen, indem Sie die Methode [`LanguageDetector.destroy()`](/de/docs/Web/API/LanguageDetector/destroy)/[`Translator.destroy()`](/de/docs/Web/API/Translator/destroy) aufrufen. Es wird empfohlen, dies zu tun, nachdem Sie mit dem Objekt fertig sind, da es viele Ressourcen verbrauchen kann.

Siehe [Verwendung der Translator- und Sprachenerkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using) für eine Schritt-für-Schritt-Anleitung zur Nutzung der APIs.

## Schnittstellen

- [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) {{Experimental_Inline}}
  - : Beinhaltet alle Funktionen zur Sprachenerkennung, einschließlich der Überprüfung der Verfügbarkeit von KI-Modellen, der Erstellung einer neuen `LanguageDetector`-Instanz, der Nutzung zur Erkennung einer Sprache und mehr.
- [`Translator`](/de/docs/Web/API/Translator) {{Experimental_Inline}}
  - : Beinhaltet alle Übersetzungsfunktionen, einschließlich der Überprüfung der Verfügbarkeit von KI-Modellen, der Erstellung einer neuen `Translator`-Instanz, der Nutzung zur Erstellung einer Übersetzung und mehr.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; die {{httpheader("Permissions-Policy/language-detector", "language-detector")}}-Direktive
  - : Steuert den Zugriff auf die Sprachenerkennungs-Funktionalität.
    Wenn eine Richtlinie deren Nutzung ausdrücklich verbietet, wird die statische Methode [`LanguageDetector.availability()`](/de/docs/Web/API/LanguageDetector/availability_static) `unavailable` zurückgeben, und jegliche Versuche, andere `LanguageDetector`-Methoden aufzurufen, werden mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.
- {{httpheader("Permissions-Policy")}}; die {{httpheader("Permissions-Policy/translator", "translator")}}-Direktive
  - : Steuert den Zugriff auf die Übersetzungs-Funktionalität.
    Wenn eine Richtlinie deren Nutzung ausdrücklich verbietet, wird die statische Methode [`Translator.availability()`](/de/docs/Web/API/Translator/availability_static) `unavailable` zurückgeben, und jegliche Versuche, andere `Translator`-Methoden aufzurufen, werden mit einem `NotAllowedError`-[`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

## Sicherheitsüberlegungen

Die Erstellung von `LanguageDetector`- und `Translator`-Objekten erfordert, dass der Benutzer kürzlich mit der Seite interagiert hat ([vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich).

Der Zugriff auf die API wird auch über die {{httpheader("Permissions-Policy/language-detector", "language-detector")}}- und {{httpheader("Permissions-Policy/translator", "translator")}}-{{httpheader("Permissions-Policy")}}-Direktiven gesteuert.

## Beispiele

Für ein vollständiges Beispiel siehe [Verwendung der Translator- und Sprachenerkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Sprachenerkennung mit integrierter KI](https://developer.chrome.com/docs/ai/language-detection) auf developer.chrome.com (2025)
- [Übersetzung mit integrierter KI](https://developer.chrome.com/docs/ai/translator-api) auf developer.chrome.com (2025)
