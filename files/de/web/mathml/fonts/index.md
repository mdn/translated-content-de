---
title: Schriftarten für MathML
slug: Web/MathML/Fonts
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{MathMLRef}}

Schriftarten mit geeigneter Unicode-Abdeckung und Open Font Format-Features sind für eine gute Mathematikdarstellung erforderlich. Diese Seite beschreibt, wie Benutzer solche mathematischen Schriftarten installieren können, um MathML in Browsern korrekt anzuzeigen.

## Installationsanleitungen

Als allgemeine Faustregel wird empfohlen, sowohl _Latin Modern Math_ (das den [Computer Modern](https://en.wikipedia.org/wiki/Computer_Modern)-Stil verwendet, der bei mathematischen Formeln beliebt ist) als auch _STIX Two Math_ (das eine große Unicode-Abdeckung für wissenschaftliche Zeichen bietet) zu installieren. In den folgenden Abschnitten finden Sie detaillierte Anleitungen zur Installation dieser Schriftarten in verschiedenen Betriebssystemen.

### Windows

Installieren Sie die Schriftarten _Latin Modern Math_ und _STIX Two Math_ wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Öffnen Sie das ZIP-Archiv, wechseln Sie in das `latinmodern-math-1959` Verzeichnis und dann in das `otf` Verzeichnis. Sie finden dort eine `latinmodern-math` Schriftartdatei.
3. Öffnen Sie die `latinmodern-math` Schriftartdatei und klicken Sie auf die Schaltfläche **Installieren**.
4. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
5. Öffnen Sie das `static_otf.zip` ZIP-Archiv und wechseln Sie dann in das `static_otf` Verzeichnis. Unter den dortigen Dateien finden Sie eine `STIXTwoMath-Regular` Datei.
6. Öffnen Sie die `STIXTwoMath-Regular` Datei und klicken Sie auf die Schaltfläche **Installieren**. Bei Bedarf können Sie dasselbe auch für die anderen Schriftdateien im Verzeichnis tun.

> **Hinweis:** _Cambria Math_ ist standardmäßig unter Windows installiert und sollte eine relativ gute MathML-Darstellung gewährleisten.

### macOS

Installieren Sie die _Latin Modern Math_ Schriftart wie folgt:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) herunter.
2. Entpacken Sie das ZIP-Archiv, wechseln Sie in das `latinmodern-math-1959` Verzeichnis und dann in das `otf` Verzeichnis. Sie finden dort eine `latinmodern-math` Schriftartdatei.
3. Doppelklicken Sie auf die `latinmodern-math` Schriftartdatei und klicken Sie im sich öffnenden Fenster auf die Schaltfläche **Schriftart installieren**.

> [!NOTE]
> Wenn Sie macOS Ventura (Version 13) oder höher verwenden, ist _STIX Two Math_ bereits vorinstalliert und Sie können die folgenden Schritte überspringen.

Installieren Sie die _STIX Two Math_ Schriftart wie folgt:

1. Laden Sie [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Öffnen Sie das `static_otf.zip` ZIP-Archiv und wechseln Sie dann in das `static_otf` Verzeichnis. Unter den dortigen Dateien finden Sie eine `STIXTwoMath-Regular.otf` Datei.
3. Öffnen Sie die `STIXTwoMath-Regular.otf` Datei und klicken Sie im sich öffnenden Fenster auf die Schaltfläche **Schriftart installieren**. Bei Bedarf können Sie dasselbe auch für die anderen Schriftdateien im Verzeichnis tun.

> [!NOTE]
> Eine veraltete Version von _STIX_ ist ab OS X Lion (Version 10.7) vorinstalliert. Obwohl einige Browser diese verwenden können, wird dringend empfohlen, die obigen Anweisungen für eine optimale mathematische Darstellung zu befolgen.

### Linux

Im Folgenden finden Sie Befehle, die Sie auf beliebten Linux-Distributionen ausführen können, um die _Latin Modern Math_ und _STIX Two Math_ Schriftarten über Ihren Paketmanager zu installieren. Alternative Ansätze werden ebenfalls angeboten, falls Ihre Linux-Distribution keine dedizierten Pakete für diese Schriftarten bereitstellt.

#### Debian-basierte Distributionen (einschließlich Ubuntu und Mint)

```bash
sudo apt-get install fonts-lmodern fonts-stix
```

#### Fedora-basierte Distributionen

```bash
sudo dnf install texlive-lm-math stix-math-fonts
```

#### openSUSE-basierte Distributionen

```bash
sudo zypper install texlive-lm-math stix-fonts
```

#### Arch Linux

```bash
sudo pacman -S otf-latinmodern-math otf-stix
```

#### TeXLive-Pakete

Wenn Ihre Linux-Distribution keine Pakete für die _Latin Modern Math_ und _STIX_ Schriftarten bereitstellt, ziehen Sie stattdessen in Betracht, die `texlive` Pakete zu installieren, die die _Latin Modern Math_ und _XITS_ Schriftarten enthalten. Zum Beispiel auf Mageia:

```bash
sudo urpmi texlive-dist texlive-fontsextra
```

Sie müssen jedoch wahrscheinlich sicherstellen, dass diese Schriftarten von Ihrem System erkannt werden. Fügen Sie eine fontconfig-Konfiguration `/etc/fonts/conf.avail/09-texlive-fonts.conf` hinzu, die auf das `opentype` Verzeichnis von TeXLive verweist, wie etwa:

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>/your/path/to/texmf-dist/fonts/opentype</dir>
</fontconfig>
```

Fügen Sie schließlich diese Konfigurationsdatei der Systemschriftartenstandortliste hinzu und regenerieren Sie den fontconfig-Cache:

```bash
ln -sf /etc/fonts/conf.avail/09-texlive-fonts.conf /etc/fonts/conf.d/
fc-cache -sf
```

#### Upstream-Pakete

Falls keine Pakete auf Ihren Linux-Distributionen verfügbar sind oder Sie einfach Upstream-Pakete installieren möchten, versuchen Sie Folgendes:

1. Laden Sie [latinmodern-math-1959.zip](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [static_otf.zip](https://raw.githubusercontent.com/stipub/stixfonts/master/zipfiles/static_otf.zip) herunter.
2. Erstellen Sie ein `~/.fonts`, falls es noch nicht existiert, und platzieren Sie `latinmodern-math.otf` und `STIXTwoMath-Regular.otf` in diesem Verzeichnis.
3. Führen Sie `fc-cache -f` aus, um den fontconfig-Cache zu regenerieren.

### Android

Sie müssen das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) verwenden.

> [!NOTE]
> Noto Sans Math bietet eine gute Unicode-Abdeckung für mathematische Symbole und [Google plant die Unterstützung für math layout features hinzuzufügen](https://github.com/notofonts/math/issues/14#issuecomment-1161414446).

### Andere Systeme

Auf anderen Systemen sollten Sie in Betracht ziehen, eine [Schriftart mit einem MATH-Table](#schriftarten_mit_einem_math-table) über Ihren Paketmanager zu installieren. Beachten Sie, dass diese Schriftarten im Allgemeinen mit TeX-Distributionen wie [TeX Live](https://www.tug.org/texlive/) geliefert werden, aber Sie müssen möglicherweise spezifischen Anweisungen folgen, damit Ihr System die Schriftarten erkennt. Als letztes Mittel installieren Sie das [MathML fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/).

## Erweiterte Einrichtung

In den nächsten Abschnitten finden Sie weitere nützliche Tipps zur Installation und Konfiguration von Schriftarten für MathML.

### Arabische mathematische alphabetische Symbole

Derzeit haben sehr wenige Schriftarten geeignete Glyphen für die arabischen mathematischen alphabetischen Symbole. Wenn Sie wahrscheinlich diese Zeichen benötigen, empfehlen wir die Installation der _XITS_ oder [Amiri](https://www.amirifont.org/) Schriftarten.

### Installation ohne Administratorrechte

Wenn Sie Schriftarten auf einem System ohne Administratorrechte installieren müssen, ist die einfachste Option, das [MathML-fonts Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-fonts/) zu verwenden. Beachten Sie, dass die Verwendung des Add-ons nicht optimal ist, da Ihr Gecko-Browser gezwungen wird, bei jedem Seitenaufruf ein CSS-Stylesheet zu laden sowie Web-Mathematik-Schriftarten auf allen Seiten mit MathML-Inhalt.

Eine bessere Alternative auf UNIX-Systemen ist es, die OTF-Dateien für [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math/download/latinmodern-math-1959.zip) und [STIX](https://github.com/stipub/stixfonts) in einem lokalen Schriftartenordner zu installieren und (falls erforderlich) `fc-cache` darauf auszuführen. Auf macOS und Linux sind die Standardpfade jeweils `~/Library/Fonts/` und `~/.fonts`.

### Schriftarten mit einem MATH-Table

Sie können tatsächlich jede [mathematische OpenType-Schriftart](https://fred-wang.github.io/MathFonts/) installieren und für das MathML-Rendering verwenden. Einige Browser bieten die Möglichkeit, die Standardschriftart für MathML in ihrem Schriftartpräferenz-Menü zu konfigurieren. Alternativ können Sie das [MathML Font Settings Add-on](https://addons.mozilla.org/en-US/firefox/addon/mathml-font-settings/) ausprobieren.

- [Asana Math](https://www.ctan.org/tex-archive/fonts/Asana-Math/)
- [Cambria Math](https://learn.microsoft.com/en-us/typography/font-list/?FID=360)
- [DejaVu Math TeX Gyre](https://sourceforge.net/projects/dejavu/files/dejavu/)
- [Garamond Math](https://github.com/YuanshengZhao/Garamond-Math)
- [Latin Modern Math](https://www.gust.org.pl/projects/e-foundry/lm-math)
- [Libertinus Math](https://github.com/alerque/libertinus)
- [STIX Math](https://github.com/stipub/stixfonts)
- [TeX Gyre Bonum Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Bonum_Math)
- [TeX Gyre Pagella Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Pagella_Math)
- [TeX Gyre Schola Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Schola_Math)
- [TeX Gyre Termes Math](https://www.gust.org.pl/projects/e-foundry/tg-math/download/index_html#Termes_Math)
- [XITS Math](https://github.com/aliftype/xits/releases)
- [Fira Math](https://github.com/firamath/firamath)
- [GFS Neohellenic Math](https://greekfontsociety-gfs.gr/typefaces/Math)
