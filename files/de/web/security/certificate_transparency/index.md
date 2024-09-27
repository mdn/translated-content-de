---
title: Certificate Transparency
slug: Web/Security/Certificate_Transparency
l10n:
  sourceCommit: e03b13c7e157ec7b7bb02a6c7c4854b862195905
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

**Certificate Transparency** ist ein offenes Framework, das entwickelt wurde, um Missbrauch und Fehlermeldungen bei Zertifikaten zu verhindern und zu überwachen. Es ist in [RFC 9162](https://www.rfc-editor.org/rfc/rfc9162) definiert. Mit Certificate Transparency werden neu ausgestellte Zertifikate in öffentlich betriebenen, oft unabhängigen _CT-Logs_ 'protokolliert', die einen nur anhängbaren, kryptographisch gesicherten Datensatz über ausgestellte TLS-Zertifikate pflegen.

Auf diese Weise können Zertifizierungsstellen (CAs) einer viel stärkeren öffentlichen Prüfung und Aufsicht unterzogen werden. Potenziell bösartige Zertifikate, wie solche, die gegen die _Baseline Requirements_ des CA/B-Forums verstoßen, können viel schneller erkannt und widerrufen werden. Browseranbieter und Verantwortliche für die Root-Stores können ebenso fundiertere Entscheidungen bezüglich problematischer CAs treffen, denen sie möglicherweise misstrauen wollen.

## Hintergrund

CT-Logs basieren auf dem _Merkle-Baum_ Datenstruktur. Die Knoten sind mit den _kryptografischen Hashes_ ihrer Kindknoten versehen. Blattknoten enthalten Hashes echter Datenstücke. Daher hängt die Bezeichnung des Wurzelknotens von allen anderen Knoten im Baum ab.

Im Kontext der Certificate Transparency sind die von den Blattknoten gehashten Daten die Zertifikate, die von den verschiedenen heute tätigen CAs ausgestellt wurden. Die Einbeziehung eines Zertifikats kann mittels eines _Prüfnachweises_ überprüft werden, der effizient und in logarithmischer Zeit O(log n) generiert und verifiziert werden kann.

Certificate Transparency entstand ursprünglich im Jahr 2013 vor dem Hintergrund von CA-Verletzungen (DigiNotar-Einbruch 2011), fragwürdigen Entscheidungen (Trustwave-Untergeordneter Root-Zwischenfall 2012) und technischen Ausstellungsproblemen (Ausstellung schwacher, 512-Bit-Zertifikate durch DigiCert Sdn Bhd aus Malaysia).

## Implementierung

Wenn Zertifikate in ein CT-Log eingereicht werden, wird ein _Signed Certificate Timestamp_ (SCT) generiert und zurückgegeben. Dies dient als Beweis, dass das Zertifikat eingereicht wurde und dem Log hinzugefügt wird.

Die Spezifikation besagt, dass konforme Server _müssen_ eine Anzahl dieser SCTs an TLS-Clients bereitstellen, wenn diese sich verbinden. Dies kann über eine Reihe unterschiedlicher Mechanismen erreicht werden:

- X.509v3-Zertifikaterweiterung, die signierte Zertifikatstimestamps direkt in das Blattzertifikat einbettet
- Eine TLS-Erweiterung vom Typ `signed_certificate_timestamp`, die während des Handshakes gesendet wird
- OCSP-Stapling (d.h. die `status_request` TLS-Erweiterung) und Bereitstellung einer `SignedCertificateTimestampList` mit einem oder mehreren SCTs

Mit der X.509-Zertifikaterweiterung werden die enthaltenen SCTs von der ausstellenden CA entschieden. Seit Juni 2021 enthalten die meisten aktiv genutzten und gültigen öffentlich vertrauenswürdigen Zertifikate Transparenztaten, die in dieser Erweiterung eingebettet sind. Diese Methode sollte keine Modifikationen an Webservern erfordern.

Mit den letztgenannten Methoden müssen Server aktualisiert werden, um die erforderlichen Daten zu senden. Der Vorteil besteht darin, dass der Serverbetreiber die CT-Log-Quellen anpassen kann, die die SCTs senden, die über die TLS-Erweiterung/OCSP-Stapling-Antwort gesendet werden.

## Browser-Anforderungen

Google Chrome fordert die Aufnahme in CT-Logs für alle Zertifikate, die nach dem 30. April 2018 ausgestellt wurden. Benutzer werden daran gehindert, Websites mit nicht konformen TLS-Zertifikaten zu besuchen. Chrome hatte zuvor die Aufnahme in CT für _Extended Validation_ (EV) und von Symantec ausgestellte Zertifikate gefordert.

Apple [fordert](https://support.apple.com/en-gb/103214) eine unterschiedliche Anzahl von SCTs, damit Safari und andere Server den Serverzertifikaten vertrauen.

Firefox [überprüft derzeit nicht](https://bugzil.la/1281469) oder fordert nicht die Verwendung von CT-Logs für Websites, die Benutzer besuchen.
