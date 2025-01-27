---
title: Certificate Transparency
slug: Web/Security/Certificate_Transparency
l10n:
  sourceCommit: bf9012075e1da14309c3f24b8e7bf1eb67e54ba5
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

**Certificate Transparency** ist ein offenes Framework, das entwickelt wurde, um Zertifikat-Fehlausstellungen zu schützen und zu überwachen. Es ist in [RFC 9162](https://www.rfc-editor.org/rfc/rfc9162) definiert. Mit Certificate Transparency werden neu ausgestellte Zertifikate in öffentlich betriebenen, oft unabhängigen _CT-Logs_ „protokolliert“ — die einen nur anhängbaren, kryptografisch gesicherten Datensatz über ausgestellte TLS-Zertifikate führen.

Auf diese Weise können Zertifizierungsstellen (CAs) einer viel größeren öffentlichen Kontrolle und Aufsicht unterworfen werden. Potenziell bösartige Zertifikate, wie solche, die die CA/B-Forum _Baseline Requirements_ verletzen, können viel schneller entdeckt und widerrufen werden. Browseranbieter und Root-Store-Verwalter sind ebenfalls in der Lage, fundiertere Entscheidungen in Bezug auf problematische CAs zu treffen, denen sie möglicherweise das Vertrauen entziehen.

## Hintergrund

CT-Logs basieren auf der Grundlage der _Merkle-Baum_ Datenstruktur. Knoten sind mit den _kryptografischen Hashes_ ihrer Kindknoten beschriftet. Blattknoten enthalten Hashes tatsächlicher Datenstücke. Die Beschriftung des Wurzelknotens hängt daher von allen anderen Knoten im Baum ab.

Im Zusammenhang mit Certificate Transparency sind die durch die Blattknoten gehashten Daten die Zertifikate, die von den verschiedenen heute tätigen CAs ausgestellt wurden. Die Zertifikatsaufnahme kann über einen _audit proof_ überprüft werden, der effizient in logarithmischer O(log n) Zeit generiert und verifiziert werden kann.

Certificate Transparency entstand ursprünglich 2013 vor dem Hintergrund von CA-Kompromittierungen (DigiNotar-Verletzung im Jahr 2011), fragwürdigen Entscheidungen (Trustwave Subordinate Root Vorkommnis im Jahr 2012) und technischen Ausgabeproblemen (schwache, 512-Bit Zertifikatsausgabe durch DigiCert Sdn Bhd von Malaysia).

## Implementierung

Wenn Zertifikate an ein CT-Log übermittelt werden, wird ein _signed certificate timestamp_ (SCT) generiert und zurückgegeben. Dies dient als Nachweis dafür, dass das Zertifikat übermittelt wurde und dem Log hinzugefügt wird.

Die Spezifikation besagt, dass konforme Server dazu _verpflichtet_ sind, TLS-Clients eine Anzahl dieser SCTs bereitzustellen, wenn sie sich verbinden. Dies kann über eine Anzahl unterschiedlicher Mechanismen erreicht werden:

- X.509v3 Zertifikaterweiterung, die signed certificate timestamps direkt in das Blattzertifikat eingebettet
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- OCSP-Stapling (das heißt die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList` mit einem oder mehreren SCTs

Bei der X.509-Zertifikaterweiterung werden die enthaltenen SCTs von der ausstellenden CA festgelegt. Seit Juni 2021 enthalten die meisten aktiv verwendeten und gültigen öffentlich vertrauenswürdigen Zertifikate Transparenzdaten in dieser Erweiterung. Diese Methode sollte nicht erfordern, dass Webserver modifiziert werden.

Bei den letzteren Methoden müssen Server aktualisiert werden, um die erforderlichen Daten zu senden. Der Vorteil ist, dass der Serverbetreiber die CT-Log-Quellen anpassen kann, die die SCTs über die TLS-Erweiterung/OCSP-gestapelte Antwort senden.

## Browser-Anforderungen

Google Chrome 107 und später erfordert CT-Log-Einbindung für alle Zertifikate, die mit einem `notBefore` Datum nach dem 30. April 2018 ausgestellt wurden. Es wird Benutzern nicht gestattet sein, Webseiten zu besuchen, die nicht konforme TLS-Zertifikate verwenden. Chrome hatte zuvor CT-Einbindung für _Extended Validation_ (EV) und durch Symantec ausgestellte Zertifikate erfordert.

Apple [erfordert](https://support.apple.com/en-gb/103214) eine unterschiedliche Anzahl an SCTs, damit Safari und andere Server Serverzertifikaten vertrauen.

Firefox Desktop ab Version 135 erfordert die CT-Log-Einbindung für alle Zertifikate, die von Zertifizierungsstellen im Mozilla Root CA-Programm ausgestellt wurden. Firefox für Android erfordert derzeit keine CT-Log-Einbindung.
