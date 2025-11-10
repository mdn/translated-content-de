---
title: Translator and Language Detector APIs
slug: Web/API/Translator_and_Language_Detector_APIs
l10n:
  sourceCommit: f91ff68767990aea89c9cb21fd8fc6b365cef3cb
---

{{DefaultAPISidebar("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **Übersetzer- und Spracherkennungs-APIs** bieten Funktionen zur Erkennung der Sprache, in der ein Text geschrieben ist, und zur Übersetzung von Texten in verschiedene Sprachen über das interne KI-Modell eines Browsers (das zwischen den Browsern variieren kann).

## Konzepte und Nutzung

Die Übersetzung von Text ist eine häufige Aufgabe im heutigen Web. Typische Anwendungsfälle sind:

- Spontane Übersetzung eines Artikels, der nicht in Ihrer Sprache verfügbar ist.
- Übersetzung von Supportanfragen eines Benutzers in eine Sprache, die der Supportmitarbeiter versteht.
- Unterstützung von Chats zwischen Benutzern, die nicht dieselbe Sprache sprechen.

Das Erkennen der Sprache eines Textes ist eine wichtige Voraussetzung für eine erfolgreiche automatische Übersetzung, hat jedoch auch andere Anwendungen über die direkte Übersetzung hinaus. Beispielsweise ermöglicht es die automatische Konfiguration der Benutzeroberfläche basierend auf der Texteingabe des Benutzers, von der Aktualisierung von Benutzeroberflächen- und Fehlermeldungen bis hin zum automatischen Laden geeigneter Wörterbücher zur Rechtschreibprüfung oder zur Erkennung von Fluchwörtern.

KI eignet sich gut für die Unterstützung bei der Spracherkennung und -übersetzung. Die Übersetzer- und Spracherkennungs-APIs bieten asynchrone ({{jsxref("Promise")}}-basierte) Mechanismen für eine Website, um Sprachen zu erkennen und Text über das interne KI-Modell des Browsers zu übersetzen. Dies ist nützlich und effizient, da der Browser den Dienst übernimmt, anstatt dass der Entwickler darauf angewiesen ist, dass der Benutzer KI-Modelle herunterlädt, oder einen cloudbasierten Übersetzungsdienst zu hosten oder zu bezahlen.

- Die Spracherkennung wird über das [`LanguageDetector`](/de/docs/Web/API/LanguageDetector)-Interface durchgeführt. Eine `LanguageDetector`-Objektinstanz wird mithilfe der [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static)-statischen Methode erstellt, dann wird die [`detect()`](/de/docs/Web/API/LanguageDetector/detect)-Instanzmethode der Textzeichenfolge übergeben, um die Sprache zu erkennen.
- Die Übersetzung erfolgt über das [`Translator`](/de/docs/Web/API/Translator)-Interface. Eine `Translator`-Objektinstanz wird mithilfe der [`Translator.create()`](/de/docs/Web/API/Translator/create_static)-statischen Methode erstellt, dann wird die [`translate()`](/de/docs/Web/API/Translator/translate)-Instanzmethode der zu übersetzenden Textzeichenfolge übergeben.

Sie können einen ausstehenden `create()`, `detect()` oder `translate()`-Vorgang mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen.

Nachdem eine `LanguageDetector`- oder `Translator`-Instanz erstellt wurde, können Sie ihre zugewiesenen Ressourcen freigeben und jegliche weitere Aktivitäten stoppen, indem Sie deren [`LanguageDetector.destroy()`](/de/docs/Web/API/LanguageDetector/destroy)/[`Translator.destroy()`](/de/docs/Web/API/Translator/destroy)-Methode aufrufen. Es wird empfohlen, dies zu tun, nachdem Sie das Objekt nicht mehr benötigen, da es viele Ressourcen verbrauchen kann.

Siehe [Verwendung der Übersetzer- und Spracherkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using) für eine Anleitung zur Nutzung der APIs.

## Schnittstellen

- [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) {{Experimental_Inline}}
  - : Beinhaltet die gesamte Funktionalität zur Spracherkennung, einschließlich der Überprüfung der Verfügbarkeit von KI-Modellen, der Erstellung einer neuen `LanguageDetector`-Instanz, deren Verwendung zur Spracherkennung und mehr.
- [`Translator`](/de/docs/Web/API/Translator) {{Experimental_Inline}}
  - : Beinhaltet die gesamte Übersetzungsfunktionalität, einschließlich der Überprüfung der Verfügbarkeit von KI-Modellen, der Erstellung einer neuen `Translator`-Instanz, deren Verwendung zur Erstellung einer Übersetzung und mehr.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; die {{httpheader("Permissions-Policy/language-detector", "language-detector")}}-Direktive
  - : Kontrolliert den Zugriff auf die Spracherkennungsfunktionalität. Wird ihre Nutzung durch eine Richtlinie ausdrücklich untersagt, schlagen alle Versuche, die `LanguageDetector`-Methoden aufzurufen, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.
- {{httpheader("Permissions-Policy")}}; die {{httpheader("Permissions-Policy/translator", "translator")}}-Direktive
  - : Kontrolliert den Zugriff auf die Übersetzungsfunktionalität. Wird ihre Nutzung durch eine Richtlinie ausdrücklich untersagt, schlagen alle Versuche, die `Translator`-Methoden aufzurufen, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehl.

## Sicherheitsüberlegungen

Die Erstellung von `LanguageDetector`- und `Translator`-Objekten erfordert, dass der Benutzer kürzlich mit der Seite interagiert hat ([vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich).

Der Zugriff auf die API wird außerdem über die {{httpheader("Permissions-Policy/language-detector", "language-detector")}}- und {{httpheader("Permissions-Policy/translator", "translator")}}-{{httpheader("Permissions-Policy")}}-Direktiven gesteuert.

## Beispiele

Ein vollständiges Beispiel finden Sie unter [Verwendung der Übersetzer- und Spracherkennungs-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spracherkennung mit eingebauter KI](https://developer.chrome.com/docs/ai/language-detection) auf developer.chrome.com (2025)
- [Übersetzungen mit eingebauter KI](https://developer.chrome.com/docs/ai/translator-api) auf developer.chrome.com (2025)
