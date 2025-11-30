---
title: Translator and Language Detector APIs
slug: Web/API/Translator_and_Language_Detector_APIs
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{DefaultAPISidebar("Translator and Language Detector APIs")}}{{SeeCompatTable}}{{securecontext_header}}

Die **Translator- und Language Detector-APIs** bieten Funktionen zur Erkennung der Sprache, in der ein Text geschrieben ist, und zur Übersetzung von Texten in verschiedene Sprachen über das interne KI-Modell eines Browsers (was je nach Browser unterschiedlich sein kann).

## Konzepte und Nutzung

Die Übersetzung von Texten ist eine häufige Aufgabe im heutigen Web. Typische Anwendungsfälle sind:

- Spontane Übersetzung eines Artikels, der in Ihrer Sprache nicht verfügbar ist.
- Übersetzung von Supportanfragen eines Benutzers in eine Sprache, die der Support-Mitarbeiter versteht.
- Erleichterung von Chats zwischen Benutzern, die nicht die gleiche Sprache sprechen.

Die Erkennung der Sprache eines Textes ist ein wichtiger Schritt für eine erfolgreiche automatisierte Übersetzung, hat jedoch auch andere Anwendungen jenseits der direkten Übersetzung. So ermöglicht sie zum Beispiel die automatische Konfiguration der Benutzeroberfläche basierend auf der Texteintragung des Benutzers, von der Aktualisierung der UI- und Fehlermeldungen bis hin zum automatischen Laden geeigneter Wörterbücher für die Rechtschreibprüfung oder Schimpfworterkennung.

KI eignet sich hervorragend zur Unterstützung bei der Spracherkennung und Übersetzung. Die Translator- und Language Detector-APIs bieten asynchrone ({{jsxref("Promise")}}-basierte) Mechanismen, um auf einer Website Sprachen zu erkennen und Texte über das interne KI-Modell des Browsers zu übersetzen. Dies ist nützlich und effizient, da der Browser den Dienst übernimmt, anstatt dass der Entwickler darauf angewiesen ist, dass der Benutzer KI-Modelle herunterlädt oder einen cloudbasierten Übersetzungsdienst hosten oder bezahlen muss.

- Die Spracherkennung erfolgt über die [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) Schnittstelle. Ein `LanguageDetector`-Objekt wird mit der statischen Methode [`LanguageDetector.create()`](/de/docs/Web/API/LanguageDetector/create_static) erstellt, dann wird die [`detect()`](/de/docs/Web/API/LanguageDetector/detect) Instanzmethode aufgerufen und der zu erkennende Text übergeben.
- Die Übersetzung erfolgt über die [`Translator`](/de/docs/Web/API/Translator) Schnittstelle. Ein `Translator`-Objekt wird mit der statischen Methode [`Translator.create()`](/de/docs/Web/API/Translator/create_static) erstellt, dann wird die [`translate()`](/de/docs/Web/API/Translator/translate) Instanzmethode aufgerufen und der zu übersetzende Text übergeben.

Sie können eine ausstehende `create()`, `detect()` oder `translate()`-Operation mit einem [`AbortController`](/de/docs/Web/API/AbortController) abbrechen.

Nachdem eine `LanguageDetector`- oder `Translator`-Instanz erstellt wurde, können Sie ihre zugewiesenen Ressourcen freigeben und jegliche weitere Aktivität stoppen, indem Sie die [`LanguageDetector.destroy()`](/de/docs/Web/API/LanguageDetector/destroy)/[`Translator.destroy()`](/de/docs/Web/API/Translator/destroy) Methode aufrufen. Es wird empfohlen, dies zu tun, nachdem Sie das Objekt nicht mehr benötigen, da es viele Ressourcen verbrauchen kann.

Siehe [Nutzung der Translator- und Language Detector-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using) für eine Schritt-für-Schritt-Anleitung zur Nutzung der APIs.

## Schnittstellen

- [`LanguageDetector`](/de/docs/Web/API/LanguageDetector) {{Experimental_Inline}}
  - : Beinhaltet alle Funktionen zur Spracherkennung, einschließlich der Überprüfung der Verfügbarkeit des KI-Modells, der Erstellung einer neuen `LanguageDetector`-Instanz, der Verwendung zur Spracherkennung und mehr.
- [`Translator`](/de/docs/Web/API/Translator) {{Experimental_Inline}}
  - : Beinhaltet alle Funktionen zur Übersetzung, einschließlich der Überprüfung der Verfügbarkeit des KI-Modells, der Erstellung einer neuen `Translator`-Instanz, der Nutzung zur Übersetzung und mehr.

## HTTP-Header

- {{httpheader("Permissions-Policy")}}; die Direktive {{httpheader("Permissions-Policy/language-detector", "language-detector")}}
  - : Kontrolliert den Zugriff auf die Spracherkennungsfunktion. Wo eine Richtlinie ihre Nutzung ausdrücklich untersagt, wird jeder Versuch, die `LanguageDetector`-Methoden aufzurufen, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.
- {{httpheader("Permissions-Policy")}}; die Direktive {{httpheader("Permissions-Policy/translator", "translator")}}
  - : Kontrolliert den Zugriff auf die Übersetzungsfunktion. Wo eine Richtlinie ihre Nutzung ausdrücklich untersagt, wird jeder Versuch, die `Translator`-Methoden aufzurufen, mit einem `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen.

## Sicherheitsüberlegungen

Die Erstellung von `LanguageDetector`- und `Translator`-Objekten erfordert, dass der Benutzer kürzlich mit der Seite interagiert hat ([transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich).

Der Zugriff auf die API wird auch über die {{httpheader("Permissions-Policy/language-detector", "language-detector")}} und {{httpheader("Permissions-Policy/translator", "translator")}} {{httpheader("Permissions-Policy")}} Direktiven gesteuert.

## Beispiele

Für ein vollständiges Beispiel siehe [Nutzung der Translator- und Language Detector-APIs](/de/docs/Web/API/Translator_and_Language_Detector_APIs/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Spracherkennung mit eingebauter KI](https://developer.chrome.com/docs/ai/language-detection) auf developer.chrome.com (2025)
- [Übersetzung mit eingebauter KI](https://developer.chrome.com/docs/ai/translator-api) auf developer.chrome.com (2025)
